import {IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator'
export class UserSignUpDto{
    @IsString({message : 'not empty'})
    @IsNotEmpty({message: 'should be string'})
    name : string;

    @IsEmail({},{message: 'unvalid email'})
    @IsNotEmpty()
    email : string;

    @IsNotEmpty()
    @MinLength(8,{message:'password must be at least 8 characters'})
    password : string;
}