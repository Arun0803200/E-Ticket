import { IsEmail, IsNotEmpty } from "class-validator";

export class FounderRequest {

    @IsNotEmpty()
    public password: string;

    @IsNotEmpty()
    public firstName: string;

    public lastName: string;

    @IsNotEmpty()
    @IsEmail()
    public email: string;

    public  mobileNo: string;

    public  theatreName: string;

    public  theatreUrl: string;

    public  comission: number;

    public  address1: string;

    public  address2: string;

    public  country: string;

    public  state: string;

    public  district: string;

    public  pinCode: number;
}
