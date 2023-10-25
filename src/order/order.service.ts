import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { Repository } from "typeorm";
import { RoomService } from "../room/room.service";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly order: Repository<Order>,
    private readonly roomService: RoomService
  ) {
  }

  async create(createOrderDto: CreateOrderDto) {
    const data = new Order();
    data.user = createOrderDto.userId;
    data.orderStatus = createOrderDto.orderStatus;
    data.checkInDate = createOrderDto.checkInDate;
    data.room = createOrderDto.roomId;
    data.checkOutDate = createOrderDto.checkOutDate;
    await this.order.save(data);

    const updateRoomDto = {
      roomStatus: "已预定"
    };
    this.roomService.update(+createOrderDto.roomId, updateRoomDto);

    return { message: "预定成功" };
  }

  async findAll() {
    return await this.order.find({ relations: ["room", "user"] });
  }

  async findOne(orderStatus: string) {
    const order = await this.order.find({
      where: {
        orderStatus
      },
      relations: ["room", "user"]
    });
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {

    const orderInfo = await this.order.find({ where: { id }, relations: ["room"] });
    const roomId = orderInfo[0].room.id;

    if (updateOrderDto.orderStatus == "已使用") {
      // 更新客房状态为可用
      const updateRoomDto = {
        roomStatus: "可用"
      };
      this.roomService.update(roomId, updateRoomDto);
    }

    await this.order.update(id, updateOrderDto);
    return "修改成功";
  }

  async remove(id: number) {
    await this.order.delete(id);
    return { message: "删除成功" };
  }

  async getOrderByUserIdAndOrderStatus(orderStatus: string, userId: number) {
    console.log(orderStatus, userId);

    let arr: Order[] = [];

    const orderInfo: Order[] = await this.order.find({ where: { orderStatus: "待使用" }, relations: ["user", "room"] });
    for (let i = 0; i < orderInfo.length; i++) {
      if (orderInfo[i].user.id == userId) {
        arr.push(orderInfo[i]);
      }
    }
    return arr;
  }
}
