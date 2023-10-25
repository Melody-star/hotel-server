import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { OrderDetailService } from "./order-detail.service";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { UpdateOrderDetailDto } from "./dto/update-order-detail.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("菜品订单")
@Controller("order-detail")
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {
  }

  @ApiOperation({ summary: "订餐" })
  @Post()
  create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailService.create(createOrderDetailDto);
  }

  @ApiOperation({ summary: "获取所有菜品订单信息" })
  @Get()
  findAll() {
    return this.orderDetailService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.orderDetailService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateOrderDetailDto: UpdateOrderDetailDto) {
    return this.orderDetailService.update(+id, updateOrderDetailDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.orderDetailService.remove(+id);
  }
}
