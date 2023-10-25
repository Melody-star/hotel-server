import { Injectable } from "@nestjs/common";
import { CreateMenuItemDto } from "./dto/create-menu-item.dto";
import { UpdateMenuItemDto } from "./dto/update-menu-item.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { Repository } from "typeorm";
import { MenuItem } from "./entities/menu-item.entity";

@Injectable()
export class MenuItemService {
  constructor(
    @InjectRepository(MenuItem) private readonly menuItem: Repository<MenuItem>
  ) {
  }

  async create(createMenuItemDto: CreateMenuItemDto) {
    const data = new MenuItem();
    data.price = createMenuItemDto.price;
    data.itemImage = createMenuItemDto.itemImage;
    data.itemName = createMenuItemDto.itemName;
    data.description = createMenuItemDto.description;
    await this.menuItem.save(data);
    return "添加成功";
  }

  async findAll() {
    return await this.menuItem.find();
  }

  async findOne(itemName: string) {
    const data = await this.menuItem.find({ where: { itemName } });
    return data;
  }

  async update(id: number, updateMenuItemDto: UpdateMenuItemDto) {
    await this.menuItem.update(id, updateMenuItemDto);
    return "修改成功";
  }

  async remove(id: number) {
    await this.menuItem.delete(id);
    return "删除成功";
  }
}
