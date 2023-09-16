import { Injectable } from "@nestjs/common";
import { CreateFinancialInfoDto } from "./dto/create-financial-info.dto";
import { UpdateFinancialInfoDto } from "./dto/update-financial-info.dto";

@Injectable()
export class FinancialInfoService {
  create(createFinancialInfoDto: CreateFinancialInfoDto) {
    return "This action adds a new financialInfo";
  }

  findAll() {
    return `This action returns all financialInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialInfo`;
  }

  update(id: number, updateFinancialInfoDto: UpdateFinancialInfoDto) {
    return `This action updates a #${id} financialInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialInfo`;
  }
}
