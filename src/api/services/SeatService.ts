import { Service } from "typedi";
import {OrmRepository} from 'typeorm-typedi-extensions';
import { SeatRepository } from "../repositories/SeatRepository";
import { Seat } from "../models/SeatModel";
import { Like } from "typeorm";
import { off } from "process";
@Service()
export class SeatService {
    constructor(
        @OrmRepository() private seatRepository: SeatRepository
    ) {}

    // Create Seat
    public async create(seatData: any): Promise<any> {
        return await this.seatRepository.save(seatData);
    }

    // Update Seat
    public async update(id: number, seatData: Seat)  {
        seatData.seatId = id;
        return await this.seatRepository.save(seatData);
    }


    // Find One The Seat
    public async findOne(seatData: any): Promise<any> {
        return await this.seatRepository.findOne(seatData);
    }

    // Find All The Seat
    public async findAll(): Promise<any> {
        return await this.seatRepository.find();
    }

    // List The Seat
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
            return await this.seatRepository.count(condition);
        } else {
            return await this.seatRepository.find(condition);
        }
    }

    // Delete Seat
    public async delete(id: number): Promise<any> {
        return await this.seatRepository.delete(id);
    }
}