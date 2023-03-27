import { IsEmail, IsNotEmpty } from "class-validator";

export class UserRequest {
    @IsNotEmpty()
    public userName: string;
    @IsNotEmpty()
    public password: string;
    @IsNotEmpty()
    public mobileNumber: string;
    @IsNotEmpty()
    @IsEmail()
    public email: string;
}