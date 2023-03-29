import { Service } from "typedi";
import {OrmRepository} from 'typeorm-typedi-extensions';
import { BookingRepository } from "../repositories/BookingRepository";
import { Booking } from "../models/BookingModel";
import { Like } from "typeorm";
import { off } from "process";
@Service()
export class BookingService {
    constructor(
        @OrmRepository() private bookingRepository: BookingRepository
    ) {}

    // Create Booking
    public async create(BookingData: any): Promise<any> {
        return await this.bookingRepository.save(BookingData);
    }

    // Update Booking
    public async update(id: number, BookingData: Booking)  {
        BookingData.bookingId = id;
        return await this.bookingRepository.save(BookingData);
    }


    // Find One The Booking
    public async findOne(BookingData: any): Promise<any> {
        return await this.bookingRepository.findOne(BookingData);
    }

    // Find All The Booking
    public async findAll(): Promise<any> {
        return await this.bookingRepository.find();
    }

    // List The Booking
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
            return await this.bookingRepository.count(condition);
        } else {
            return await this.bookingRepository.find(condition);
        }
    }

    // Delete Booking
    public async delete(id: number): Promise<any> {
        return await this.bookingRepository.delete(id);
    }
}
