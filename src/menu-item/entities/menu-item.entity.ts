// src/database/entities/menu-item.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemName: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  itemImage: string;
}
