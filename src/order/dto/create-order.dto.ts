import { User } from "../../user/entities/user.entity";
import { Room } from "../../room/entities/room.entity";

export class CreateOrderDto {
  userId: User;
  orderStatus: string;
  checkInDate: Date;
  roomId: Room;
  checkOutDate: Date;
}
