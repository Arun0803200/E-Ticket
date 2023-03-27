import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import { BaseModel } from "./BaseModel";
import { Screen } from "./ScreenModel";
import * as moment from 'moment';

@Entity('theatre_tbl')
export class Theatre extends BaseModel{
    @PrimaryGeneratedColumn({name: 'theatre_id'})
    public theareId: number;

    @Column({name: 'founder_id'})
    public founderId: number;

    @Column({name: 'approval_flag'})
    public approvalFlag: number;

    @Column({name:'licence_no'})
    public licenceNo: string;

    @Column({name: 'address_1'})
    public address1: string;

    @Column({name: 'address_2'})
    public address2: string;

    @Column({name: 'is_active'})
    public isActive: number;

    @Column({name: 'is_delete'})
    public isDelete: number;

    @OneToMany((type) => Screen, screen => screen.theatre )
    public screen: Screen

    @BeforeInsert()
    public async creatData(): Promise<any> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async modifiedData(): Promise<any> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
