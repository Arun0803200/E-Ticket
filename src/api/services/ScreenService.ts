import { Service } from "typedi";
import {OrmRepository} from 'typeorm-typedi-extensions';
import { ScreenRepository } from "../repositories/ScreenRepository";
import { Screen } from "../models/ScreenModel";
import { Like } from "typeorm";
import { off } from "process";
@Service()
export class ScreenService {
    constructor(
        @OrmRepository() private screenRepository: ScreenRepository
    ) {}

    // Create Screen
    public async create(ScreenData: any): Promise<any> {
        return await this.screenRepository.save(ScreenData);
    }

    // Update Screen
    public async update(id: number, ScreenData: Screen)  {
        ScreenData.screenId = id;
        return await this.screenRepository.save(ScreenData);
    }


    // Find One The Screen
    public async findOne(ScreenData: any): Promise<any> {
        return await this.screenRepository.findOne(ScreenData);
    }

    // Find All The Screen
    public async findAll(): Promise<any> {
        return await this.screenRepository.find();
    }

    // List The Screen
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
            return await this.screenRepository.count(condition);
        } else {
            return await this.screenRepository.find(condition);
        }
    }

    // Delete Screen
    public async delete(id: number): Promise<any> {
        return await this.screenRepository.delete(id);
    }
}
