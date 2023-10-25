import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ required: true })
  username: string;
  @ApiProperty({ required: true })
  password: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phoneNumber: string;
  @ApiProperty()
  userType: string;
  @ApiProperty()
  name: string;
}
