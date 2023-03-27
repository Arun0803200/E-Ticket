import { Service } from "typedi";
import {OrmRepository} from 'typeorm-typedi-extensions';
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";
import { Like } from "typeorm";
import { off } from "process";
@Service()
export class UserService {
    constructor(
        @OrmRepository() private userRepository: UserRepository
    ) {}

    // Create User
    public async create(userData: any): Promise<any> {
        return await this.userRepository.save(userData);
    }

    // Update User
    public async update(id: number, userData: User)  {
        userData.id = id;
        return await this.userRepository.save(userData);
    }


    // Find One The User
    public async findOne(userData: any): Promise<any> {
        return await this.userRepository.findOne(userData);
    }

    // Find All The User
    public async findAll(): Promise<any> {
        return await this.userRepository.find();
    }

    // List The User
    public async list(limit: number, offset: number, search: any = [], select: any = [], whereConditions: any = [], relation: any = [], count: number | boolean): Promise<any> {
        const condition: any = {};

        if (select && select.length > 0) {
            condition.select = select;
        }
        condition.order = {
            createdDate: 'DESC'
        }
        if (whereConditions && whereConditions.length > 0) {
            whereConditions.forEach((data) => {
                if (data.value!=='') {
                    condition.where[data.name] = data.value;
                }
            })
        }

        if (relation && relation.length > 0) {
            condition.relation;
        }

        if (search && search.length > 0) {
            search.forEach((data) => {
                const operation = data.op;
                if (operation === 'where' && data.value !== '') {
                    condition.where[data.name] = data.value;
                }
                else if (operation === 'like' && data.value !== '') {
                    condition.where[data.name] = Like('%' + data.value + '%');
                }
            })
        }

        if (limit > 0) {
            condition.take = limit;
            condition.skip = offset;
        }

        if (count) {
            return await this.userRepository.count(condition);
        } else {
            return await this.userRepository.find(condition);
        }
    }

    // Delete User
    public async delete(id: number): Promise<any> {
        return await this.userRepository.delete(id);
    }
}