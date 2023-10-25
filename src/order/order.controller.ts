import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("订单接口")
@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {
  }

  @ApiOperation({ summary: "客房预定" })
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @ApiOperation({ summary: "获取所有订单信息" })
  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @ApiOperation({ summary: "根据订单状态查询订单" })
  @Get(":orderStatus")
  findOne(@Param("orderStatus") orderStatus: string) {
    return this.orderService.findOne(orderStatus);
  }

  @ApiOperation({ summary: "修改订单信息" })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @ApiOperation({ summary: "删除订单信息" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.orderService.remove(+id);
  }

  @ApiOperation({ summary: "根据用户ID和订单状态查询订单" })
  @Get(":orderStatus/:userId")
  getOrderByUserIdAndOrderStatus(@Param("orderStatus") orderStatus: string, @Param("userId") userId: string) {
    return this.orderService.getOrderByUserIdAndOrderStatus(orderStatus, +userId);
  }
}
