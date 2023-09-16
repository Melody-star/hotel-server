import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber: string;

  @Column()
  roomType: string;

  @Column()
  price: number;

  @Column()
  capacity: number;

  @Column()
  roomImage: string;

  @Column()
  roomStatus: string; // 客房状态，可以是 "available"、"reserved" 或 "occupied"，根据需要定义
}
