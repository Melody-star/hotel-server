import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query, UseFilters
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("用户接口")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @ApiOperation({ summary: "用户注册" })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: "查找用户信息" })
  @ApiQuery({ name: "keyWord", description: "关键字", required: false })
  @ApiQuery({ name: "page", description: "页数", required: true, type: Number, example: 1 })
  @ApiQuery({ name: "pageSize", description: "每页数量", required: true, type: Number, example: 20 })
  @Get()
  findAll(@Query() query: { keyWord: string; page: number; pageSize: number }) {
    return this.userService.findAll(query);
  }

  @ApiOperation({ summary: "登录" })
  @ApiQuery({ name: "username", description: "用户名", example: "awe" })
  @ApiQuery({ name: "password", description: "密码", example: "123456" })
  @Get("/login")
  login(@Query() query: { username: string; password: string }) {
    return this.userService.login(query);
  }

  @ApiOperation({ summary: "更新用户" })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: "删除用户" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
