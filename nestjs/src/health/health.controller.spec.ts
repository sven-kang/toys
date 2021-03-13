import { HealthCheckService, HttpHealthIndicator } from "@nestjs/terminus";
import { Test, TestingModule } from "@nestjs/testing";
import { HealthController } from "./health.controller";

describe("HealthController", () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthCheckService, HttpHealthIndicator],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  describe("health", () => {
    it("should be defined", () => {
      expect(controller).toBeDefined();
    });
  });
});
