import { JsonController, Req, Res, Get, Post, Body, QueryParam, BodyParam } from "routing-controllers";
import { UserService } from "../services/UserService";
import { UserRequest } from "./request/UserRequest";
import { User } from "../models/User";
import * as jwt from 'jsonwebtoken';
import { Token } from "../models/Token";
import { TokenService } from "../services/TokenService";
@JsonController('/user')
export class UserController {
    constructor(
        private userService: UserService,
        private tokenService: TokenService
    ) {}

    // Create user
    @Post()
    public async createUser(@Body({validate: true}) userRequest: UserRequest, @Res() response: any ): Promise<any> {
        const regularExpress: any = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        const newUser = new User();
        if (regularExpress.test(userRequest.password) === true) {
            const hashPassword: any = await User.hashPassword(userRequest.password);             
            newUser.password = hashPassword;
       } else {
           const errorMessage = {
               status: 0,
               message: 'The password must contain a lowercase letter, an uppercase letter, a number, a special character, minimum 8 characters and maximum 20 character !!'
           }
           return response.status(400).send(errorMessage);
       }
        const findUser = await this.userService.findOne({
            where: {
                userName: userRequest.userName
            }
        });
        if (findUser) {
            const errorResponse = {
                status: 0,
                message: 'The name already exists. Try giving another username !!'
            };
            return response.status(400).send(errorResponse);
        }
        const findEmail = await this.userService.findOne({
            where: {
                email: userRequest.email
            }
        });
        if (findEmail) {
            const errorResponse = {
                status: 0,
                message: 'Email already exists. Try giving another email !!'
            };
            return response.status(400).send(errorResponse);
        }

        const finMobile = await this.userService.findOne({
            where: {
                mobileNumber: userRequest.mobileNumber
            }
        });
        if (finMobile) {
            const errorResponse = {
                status: 0,
                message: 'Mobile number already exists. Try giving another mobile number !!'
            };
            return response.status(400).send(errorResponse);
        }
        newUser.userName = userRequest.userName;
        newUser.email = userRequest.email;
        newUser.mobileNumber = userRequest.mobileNumber;
        newUser.isActive = 1;
        newUser.deletFlag = 0;
        const createUser = await this.userService.create(newUser);
        if (createUser) {
            const successExample = {
                status: 1,
                message: 'Successfully created the User !!',
                data: createUser
            }
            return response.status(200).send(successExample);
        }
        const errorExample = {
            status: 0,
            message: 'Unable to created the user data'
        }
        return response.status(400).send(errorExample);
    }
    // list
    @Get()
    public async list(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('count') count: number|boolean, @Res() response: any): Promise<any> {
        const select = [];
        const search = [];
        const relation = [];
        const whereCondition = [];
        const sort = [];
        if (keyword !== undefined) {
            search.push({
                name: 'userName',
                op: 'like',
                value: keyword
            });
        }
        const listUser = await this.userService.list(limit, offset, search, select, whereCondition, relation, count);

        if (count) {
            return response.status(200).send({status: 1, message: 'Successfully got the count !!', data: listUser});
        }
            return response.status(200).send({status: 1, message: 'Successfully got the data !!', data: listUser});
    }

    // Login API
    @Post('/login')
    public async login(@BodyParam('username') username: string, @BodyParam('password') password: string, @Res() response: any): Promise<any> {
        const findUser = await this.userService.findOne({where: [{userName: username}, {mobileNumber: username}, {email: username}]});
        if (!findUser) {
            return response.status(400).send({status: 0, message: 'Username is Invalis !!'});
        }
        const comparePassword = await User.comparePassword(password, findUser.password);
        if (!comparePassword) {
            return response.status(400).send({status: 0, message: 'Invalid password !!'});
        }
        const secretKet = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({id: findUser.id, role: 'admin'},secretKet);
        const newToken = new Token();
        newToken.token = token;
        await this.tokenService.create(newToken);
        return response.status(200).send(findUser);
    }
}
