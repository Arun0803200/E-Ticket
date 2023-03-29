import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { BaseModel } from './BaseModel';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';

@Entity('founder')
export class Founder extends BaseModel{

    public static hashPassword(password: string) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    public static comparePassword(password: any, hashPassword: Founder) {
        return new Promise((resolve, reject) => {
            bcrypt.comparePassword(password, hashPassword, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }
    @PrimaryGeneratedColumn({name: 'founder_id'})
    public founderId: number;

    @Column({name: 'first_name'})
    public firstName: string;

    @Column({name: 'last_name'})
    public lastName: string;

    @Column({name: 'email'})
    public email: string;

    @Column({name: 'username'})
    public username: string;

    @Column({name: 'password'})
    public password: string

    @Column({name: 'mobile_no'})
    public mobileNo: string;

    @Column({name: 'theatre_name'})
    public theatreName: string;

    @Column({name: 'theatre_url'})
    public theatreUrl: string;

    @Column({name: 'comission'})
    public comission: number

    @Column({name: 'address_1'})
    public address1: string;

    @Column({name: 'address_2'})
    public address2: string;

    @Column({name: 'country'})
    public country: string;

    @Column({name: 'state'})
    public state: string;

    @Column({name: 'district'})
    public district: string;

    @Column({name: 'pin_code'})
    public pinCode: number;

    @Column({name: 'approval_flag'})
    public approvalFlag: number;

    @Column({name: 'is_active'})
    public isActive: number;

    @Column({name: 'delete_flag'})
    public deleteFlag: number;

    @BeforeInsert()
    public async createData(): Promise<any> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
    @BeforeUpdate()
    public async updateData(): Promise<any> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}