import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {
  }

  create(createUserDto: CreateUserDto) {
    const data = new User();
    data.username = createUserDto.username;
    data.password = createUserDto.password;
    data.email = createUserDto.email;
    data.name = createUserDto.name;
    data.userType = createUserDto.userType;
    data.phoneNumber = createUserDto.phoneNumber;
    this.user.save(data);
  }

  async login(query: { username: string; password: string }) {



    const { username, password } = query;
    const userInfo = await this.findUserInfo(username);

    if (userInfo === null) {
      return { message: "用户不存在" };
    }

    if (userInfo.password === password) {
      return { message: "登录成功", data: userInfo };
    } else {
      return { message: "密码错误" };
    }
  }

  async findUserInfo(username: string): Promise<User | null> {
    return this.user.findOne({ where: { username } });
  }

  async findAll(query: { keyWord: string; page: number; pageSize: number }) {
    const data = await this.user.find({
      where: {
        username: Like(`%${query.keyWord}%`)
      },
      order: {
        id: "DESC"
      },
      skip: (query.page - 1) * query.pageSize,
      take: query.pageSize
    });
    const total = await this.user.count({
      where: {
        username: Like(`%${query.keyWord}%`)
      }
    });
    return {
      data,
      total
    };
  }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.userRepository.findOne({ where: { username } });
  // }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.user.update(id, updateUserDto);
    return "修改成功";
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
