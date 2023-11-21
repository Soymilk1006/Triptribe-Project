import { IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';

export class EditPasswordDto {
  @ApiProperty({ example: 'Abc456789+', required: true })
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  newPassword: string;
}
