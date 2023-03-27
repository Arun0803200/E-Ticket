import { Service } from "typedi";
import {OrmRepository} from 'typeorm-typedi-extensions';
import { TokenRepository } from "../repositories/TokenRepository";
import { Token } from "../models/Token";
import { Like } from "typeorm";
import { off } from "process";
@Service()
export class TokenService {
    constructor(
        @OrmRepository() private tokenRepository: TokenRepository
    ) {}

    // Create User
    public async create(data: any): Promise<any> {
        return await this.tokenRepository.save(data);
    }

    // Update User
    public async update(id: number, data: Token)  {
        data.id = id;
        return await this.tokenRepository.save(data);
    }


    // Find One The User
    public async findOne(data: any): Promise<any> {
        return await this.tokenRepository.findOne(data);
    }

    // Find All The User
    public async findAll(): Promise<any> {
        return await this.tokenRepository.find();
    }

    // List The User
    public async list(limit: number, offset: number, search: any = [], select: any = [], whereConditions: any = [], relation: any = [], count: number | boolean): Promise<any> {
        const condition: any = {};

        if (select && select.length > 0) {
            condition.select = select;
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
            return await this.tokenRepository.count(condition);
        } else {
            return await this.tokenRepository.find(condition);
        }
    }

    // Delete User
    public async delete(id: number): Promise<any> {
        return await this.tokenRepository.delete(id);
    }
}