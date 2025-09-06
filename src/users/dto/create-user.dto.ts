import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Only valid email adress' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(10, { message: 'Password must be at least 10 characters long' })
  password: string;

  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  name?: string;
}
