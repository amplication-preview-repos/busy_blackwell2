import { Module } from "@nestjs/common";
import { MethodModuleBase } from "./base/method.module.base";
import { MethodService } from "./method.service";
import { MethodController } from "./method.controller";
import { MethodResolver } from "./method.resolver";

@Module({
  imports: [MethodModuleBase],
  controllers: [MethodController],
  providers: [MethodService, MethodResolver],
  exports: [MethodService],
})
export class MethodModule {}
