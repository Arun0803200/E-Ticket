import { Service } from "typedi";
import {OrmRepository} from 'typeorm-typedi-extensions';
import { TheatreRepository } from "../repositories/TheatreRepository";
import { Theatre } from "../models/TheatreModel";
import { Like } from "typeorm";
import { off } from "process";
@Service()
export class TheatreService {
    constructor(
        @OrmRepository() private theatreRepository: TheatreRepository
    ) {}

    // Create Theatre
    public async create(theatreData: any): Promise<any> {
        return await this.theatreRepository.save(theatreData);
    }

    // Update Theatre
    public async update(id: number, theatreData: Theatre)  {
        theatreData.theareId = id;
        return await this.theatreRepository.save(theatreData);
    }


    // Find One The Theatre
    public async findOne(theatreData: any): Promise<any> {
        return await this.theatreRepository.findOne(theatreData);
    }

    // Find All The Theatre
    public async findAll(): Promise<any> {
        return await this.theatreRepository.find();
    }

    // List The Theatre
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
            return await this.theatreRepository.count(condition);
        } else {
            return await this.theatreRepository.find(condition);
        }
    }

    // Delete Theatre
    public async delete(id: number): Promise<any> {
        return await this.theatreRepository.delete(id);
    }
}