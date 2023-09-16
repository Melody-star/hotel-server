import { PartialType } from "@nestjs/mapped-types";
import { CreateFinancialInfoDto } from "./create-financial-info.dto";

export class UpdateFinancialInfoDto extends PartialType(CreateFinancialInfoDto) {
}
