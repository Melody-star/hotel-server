import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { FinancialInfoService } from "./financial-info.service";
import { CreateFinancialInfoDto } from "./dto/create-financial-info.dto";
import { UpdateFinancialInfoDto } from "./dto/update-financial-info.dto";

@Controller("financial-info")
export class FinancialInfoController {
  constructor(private readonly financialInfoService: FinancialInfoService) {
  }

  @Post()
  create(@Body() createFinancialInfoDto: CreateFinancialInfoDto) {
    return this.financialInfoService.create(createFinancialInfoDto);
  }

  @Get()
  findAll() {
    return this.financialInfoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.financialInfoService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateFinancialInfoDto: UpdateFinancialInfoDto) {
    return this.financialInfoService.update(+id, updateFinancialInfoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.financialInfoService.remove(+id);
  }
}
