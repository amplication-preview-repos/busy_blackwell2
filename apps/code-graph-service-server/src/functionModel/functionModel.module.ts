import { Module } from "@nestjs/common";
import { FunctionModelModuleBase } from "./base/functionModel.module.base";
import { FunctionModelService } from "./functionModel.service";
import { FunctionModelController } from "./functionModel.controller";
import { FunctionModelResolver } from "./functionModel.resolver";

@Module({
  imports: [FunctionModelModuleBase],
  controllers: [FunctionModelController],
  providers: [FunctionModelService, FunctionModelResolver],
  exports: [FunctionModelService],
})
export class FunctionModelModule {}
