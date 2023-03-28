import { PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, Entity, ManyToMany, ManyToOne } from "typeorm";
import { BaseModel } from "./BaseModel";
import * as moment from 'moment';
import { Screen } from "./ScreenModel";
import { type } from "os";

@Entity('seat_tbl')
export class Seat extends BaseModel{
    @PrimaryGeneratedColumn({name: 'seat_id'})
    public seatId: number;

    @Column({name: 'screen_id'})
    public dcreenId: number;

    @Column({name: 'is_booking'})
    public isBooking: number;

    @Column({name: 'movie_name'})
    public movieName: string;

    @Column({name: 'date'})
    public date: Date;

    @Column({name: 'start_time'})
    public startTime: string;

    @Column({name: 'end_time'})
    public endTime: string;

    @BeforeInsert()
    public async createData(): Promise<any> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateData(): Promise<any> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @ManyToOne((type) => Screen, screen => screen.seat)
    public screen: Screen;

}