import { Module } from "@nestjs/common";
import { MenuItemService } from "./menu-item.service";
import { MenuItemController } from "./menu-item.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MenuItem } from "./entities/menu-item.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MenuItem])],
  controllers: [MenuItemController],
  providers: [MenuItemService]
})
export class MenuItemModule {
}
