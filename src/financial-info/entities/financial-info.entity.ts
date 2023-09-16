// src/database/entities/financial-info.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Room } from "../../room/entities/room.entity"; // 导入客房实体类

@Entity()
export class FinancialInfo {
  @PrimaryGeneratedColumn()
  recordID: number; // 记录ID

  @ManyToOne(() => Room, room => room.id)
  @JoinColumn({ name: "roomID" })
  room: Room; // 客房ID，外键，关联客房表

  @Column({ type: "timestamp" })
  date: Date; // 日期

  @Column()
  income: number; // 收入

  @Column()
  expense: number; // 支出

  @Column()
  deposit: number; // 押金
}
