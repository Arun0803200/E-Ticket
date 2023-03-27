import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { BaseModel } from "./BaseModel";
import * as moment from 'moment'
import bcrypt = require('bcrypt');

@Entity('user')
export class User extends BaseModel {
    public static hashPassword(password: string) {
        return new Promise((resolve: any, reject: any) => {
            bcrypt.hash(password, 10, (err, data) => {
                if (err) {
                    reject(err);
                } 
                resolve(data);
            })
        })
    }

    public static comparePassword(password: any, hasPassword: any) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hasPassword, (err, data)=>{
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        });
    }
    @PrimaryGeneratedColumn({name: 'id'})
    public id: number;

    @Column({name: 'user_name'})
    public userName: string;

    @Column({name: 'password'})
    public password: string;

    @Column({name: 'mobile_no'})
    public mobileNumber: string;

    @Column({name: 'email'})
    public email: string;

    @Column({name: 'is_active'})
    public isActive: number;

    @Column({name: 'delete_flag'})
    public deletFlag: number;

    @BeforeInsert()
    public async createData(): Promise<any> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
    @BeforeUpdate()
    public async updateData(): Promise<any> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
