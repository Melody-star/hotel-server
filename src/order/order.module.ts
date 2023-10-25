import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { Order } from "./entities/order.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Room } from "../room/entities/room.entity";
import { RoomController } from "../room/room.controller";
import { RoomService } from "../room/room.service";

@Module({
  imports: [TypeOrmModule.forFeature([Order, Room])],
  controllers: [OrderController, RoomController],
  providers: [OrderService, RoomService]
})
export class OrderModule {
}
