import { Column, PrimaryGeneratedColumn, Entity, BeforeInsert, BeforeUpdate } from "typeorm";
import { BaseModel } from "./BaseModel";
import * as moment from "moment";
@Entity('token')
export class Token extends BaseModel{
    @PrimaryGeneratedColumn({name: 'id'})
    public id: number;

    @Column({name: 'token'})
    public token: string;

    @BeforeInsert()
    public async createData(): Promise<any> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
    @BeforeUpdate()
    public async updateData(): Promise<any> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}