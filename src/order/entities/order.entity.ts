import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../user/entities/user.entity"; // 导入用户实体类
import { Room } from "../../room/entities/room.entity"; // 导入客房实体类

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: "userId" })
    user: User;

    @ManyToOne(() => Room, room => room.id)
    @JoinColumn({ name: "roomId" })
    room: Room;

    @Column()
    orderStatus: string; // 订单状态，可以是 "unpaid"、"reserved" 或 "used"，根据需要定义

    @Column({ type: "timestamp" })
    checkInDate: Date;

    @Column({ type: "timestamp" })
    checkOutDate: Date;
}
