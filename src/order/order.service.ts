import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly order: Repository<Order>
  ) {
  }

  create(createOrderDto: CreateOrderDto) {
    const data = new Order();
    data.user = createOrderDto.userId;
    data.orderStatus = createOrderDto.orderStatus;
    data.checkInDate = createOrderDto.checkInDate;
    data.room = createOrderDto.roomId;
    data.checkOutDate = createOrderDto.checkOutDate;
    this.order.save(data);
    return { message: "预定成功" };
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  changeStatus(id) {
    // roomService.update(id,)
  }

  remove(id: number) {
    this.order.delete(id);
    console.log("order删除成功");
    return { message: "删除成功" };
  }
}
