import { Injectable } from "@nestjs/common";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { UpdateOrderDetailDto } from "./dto/update-order-detail.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrderDetail } from "./entities/order-detail.entity";

@Injectable()
export class OrderDetailService {

  constructor(
    @InjectRepository(OrderDetail) private readonly orderDetail: Repository<OrderDetail>
  ) {
  }

  create(createOrderDetailDto: CreateOrderDetailDto) {
    console.log(createOrderDetailDto);
    const data = new OrderDetail();
    data.order = createOrderDetailDto.orderId;
    data.menuItem = createOrderDetailDto.menuItemId;
    data.quantity = createOrderDetailDto.quantity;
    this.orderDetail.save(data);
    return "添加成功";
  }

  async findAll() {
    return await this.orderDetail.find({ relations: ["order", "menuItem"] });
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }
}
