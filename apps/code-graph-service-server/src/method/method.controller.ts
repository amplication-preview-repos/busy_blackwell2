import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MethodService } from "./method.service";
import { MethodControllerBase } from "./base/method.controller.base";

@swagger.ApiTags("methods")
@common.Controller("methods")
export class MethodController extends MethodControllerBase {
  constructor(protected readonly service: MethodService) {
    super(service);
  }
}
