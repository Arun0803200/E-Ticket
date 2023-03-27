import { Column } from "typeorm";
export class BaseModel {
    @Column({name: 'created_by'})
    public createdBy: number;

    @Column({name: 'created_date'})
    public createdDate: string;

    @Column({name: 'modified_by'})
    public modifiedBy: number;

    @Column({name: 'modified_date'})
    public modifiedDate: string
}