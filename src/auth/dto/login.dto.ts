import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Only valid email adress' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  password: string;
}
