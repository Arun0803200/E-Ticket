import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { BaseModel } from "./BaseModel";
import * as moment from 'moment';

@Entity('booking_tbl')
export class Booking extends BaseModel {
    @PrimaryGeneratedColumn({name: 'booking_id'})
    public bookingId: number;

    @Column({name: 'cusromer_id'})
    public cusromerId: number;

    @Column({name: 'theatre_id'})
    public theatreId: number;

    @Column({name: 'screen_id'})
    public screenId: number;

    @Column({name: 'seat_id'})
    public seatId: number;
    
    @Column({name: 'date'})
    public date: Date;

    @Column({name: 'start_time'})
    public startTime: string;

    @Column({name: 'end_time'})
    public endTime: string;

    @BeforeInsert()
    public async createdData(): Promise<any> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateData(): Promise<any> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
