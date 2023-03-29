import { Service } from "typedi";
import {OrmRepository} from 'typeorm-typedi-extensions';
import { FounderRepository } from "../repositories/FounderRepository";
import { Founder } from "../models/Founder";
import { Like } from "typeorm";
import { off } from "process";
@Service()
export class FounderService {
    constructor(
        @OrmRepository() private founderRepository: FounderRepository
    ) {}

    // Create Founder
    public async create(FounderData: any): Promise<any> {
        return await this.founderRepository.save(FounderData);
    }

    // Update Founder
    public async update(id: number, FounderData: Founder)  {
        FounderData.founderId = id;
        return await this.founderRepository.save(FounderData);
    }


    // Find One The Founder
    public async findOne(FounderData: any): Promise<any> {
        return await this.founderRepository.findOne(FounderData);
    }

    // Find All The Founder
    public async findAll(): Promise<any> {
        return await this.founderRepository.find();
    }

    // List The Founder
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
            return await this.founderRepository.count(condition);
        } else {
            return await this.founderRepository.find(condition);
        }
    }

    // Delete Founder
    public async delete(id: number): Promise<any> {
        return await this.founderRepository.delete(id);
    }
}
