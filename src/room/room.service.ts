import { Inject, Injectable } from "@nestjs/common";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "./entities/room.entity";
import { Like, Repository } from "typeorm";

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room) private readonly room: Repository<Room>
  ) {
  }

  create(createRoomDto: CreateRoomDto) {
    const data = new Room();
    data.capacity = createRoomDto.capacity;
    data.price = createRoomDto.price;
    data.roomImage = createRoomDto.roomImage;
    data.roomNumber = createRoomDto.roomNumber;
    data.roomStatus = createRoomDto.roomStatus;
    data.roomType = createRoomDto.roomType;
    this.room.save(data);
    return { message: "添加成功" };
  }

  async findAll(query: { keyWord: string; page: number; pageSize: number }) {
    const data = await this.room.find({
      where: {
        roomNumber: Like(`%${query.keyWord}%`)
      },
      order: {
        id: "DESC"
      },
      skip: (query.page - 1) * query.pageSize,
      take: query.pageSize
    });
    const total: number = await this.room.count({
      where: {
        roomNumber: Like(`%${query.keyWord}%`)
      }
    });
    return {
      data,
      total
    };
  }

  async findOne(roomNumber: string) {
    const data = await this.room.find({
      where: {
        roomNumber: roomNumber
      }
    });
    return data;
  }

  async findOneByID(id: number) {
    return await this.room.find({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    console.log(id);
    console.log(updateRoomDto);
    this.room.update(id, updateRoomDto);
    return { message: "修改成功" };
  }

  remove(id: number) {
    // this.orderService.remove(id)
    this.room.delete(id);
    return { message: "删除成功" };
  }
}
