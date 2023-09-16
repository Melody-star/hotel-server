import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Order } from "../../order/entities/order.entity"; // 导入订单实体类
import { MenuItem } from "../../menu-item/entities/menu-item.entity"; // 导入菜品实体类

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, order => order.id)
  @JoinColumn({ name: "orderId" })
  order: Order;

  @ManyToOne(() => MenuItem, menuItem => menuItem.id)
  @JoinColumn({ name: "menuItemId" })
  menuItem: MenuItem;

  @Column()
  quantity: number;
}
