import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(10)
  content: string;

  @IsString()
  @IsNotEmpty()
  author: string;
}
