import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { RoomService } from "./room.service";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";

@Controller("room")
export class RoomController {
  constructor(private readonly roomService: RoomService) {
  }

  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Get()
  findAll(@Query() query: { keyWord: string, page: number, pageSize: number }) {
    return this.roomService.findAll(query);
  }

  @Get(":roomNumber")
  findOne(@Param("roomNumber") roomNumber: string) {
    return this.roomService.findOne(roomNumber);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.update(+id, updateRoomDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.roomService.remove(+id);
  }
}
