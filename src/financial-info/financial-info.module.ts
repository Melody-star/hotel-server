import { Module } from "@nestjs/common";
import { FinancialInfoService } from "./financial-info.service";
import { FinancialInfoController } from "./financial-info.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [FinancialInfoController],
  providers: [FinancialInfoService]
})
export class FinancialInfoModule {
}
