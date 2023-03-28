import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToOne, OneToMany} from "typeorm";
import { BaseModel } from "./BaseModel";
import { Theatre } from "./TheatreModel";
import { Seat } from "./SeatModel";
import * as moment from 'moment';

@Entity('screen_tbl')
export class Screen extends BaseModel {
@PrimaryGeneratedColumn({name: 'screen_id'})
public screenId: number;

@Column({name: 'theatre_id'})
public theatreId: number;

@Column({name: 'no_of_columns'})
public noOfColumns: number;

@Column({name: 'no_of_rows'})
public noOfRows: number;

@Column({name: 'date'})
public date: string;

@Column({name: 'movie_name'})
public movieName: string;

@Column({name: 'start_time'})
public startTime: string;

@Column({name: 'end_time'})
public endTime: string;

@BeforeInsert()
public async createdData(): Promise<any> {
    this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss')
}

@BeforeUpdate()
public async modifiedData(): Promise<any> {
    this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
}

@ManyToOne((type) => Theatre, theater => theater.screen)
public theatre: Theatre;

@OneToMany((type) => Seat, seat => seat.screen)
public seat: Seat;

}
