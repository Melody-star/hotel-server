import { Test, TestingModule } from "@nestjs/testing";
import { FinancialInfoController } from "./financial-info.controller";
import { FinancialInfoService } from "./financial-info.service";

describe("FinancialInfoController", () => {
  let controller: FinancialInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialInfoController],
      providers: [FinancialInfoService]
    }).compile();

    controller = module.get<FinancialInfoController>(FinancialInfoController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
