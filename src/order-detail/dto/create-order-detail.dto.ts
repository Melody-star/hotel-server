import { Order } from "../../order/entities/order.entity";
import { MenuItem } from "../../menu-item/entities/menu-item.entity";

export class CreateOrderDetailDto {
  orderId: Order;
  menuItemId: MenuItem;
  quantity: number;
}
