import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { MenuItemService } from "./menu-item.service";
import { CreateMenuItemDto } from "./dto/create-menu-item.dto";
import { UpdateMenuItemDto } from "./dto/update-menu-item.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("菜品接口")
@Controller("menu-item")
export class MenuItemController {
  constructor(private readonly menuItemService: MenuItemService) {
  }

  @ApiOperation({ summary: "添加菜品信息" })
  @Post()
  create(@Body() createMenuItemDto: CreateMenuItemDto) {
    return this.menuItemService.create(createMenuItemDto);
  }

  @ApiOperation({ summary: "获取菜品列表" })
  @Get()
  findAll() {
    return this.menuItemService.findAll();
  }

  @ApiOperation({ summary: "按菜品名称查找菜品信息" })
  @Get(":itemName")
  findOne(@Param("itemName") itemName: string) {
    return this.menuItemService.findOne(itemName);
  }

  @ApiOperation({ summary: "修改菜品信息" })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMenuItemDto: UpdateMenuItemDto) {
    return this.menuItemService.update(+id, updateMenuItemDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.menuItemService.remove(+id);
  }
}
