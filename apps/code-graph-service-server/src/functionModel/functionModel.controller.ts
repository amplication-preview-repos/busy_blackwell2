import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FunctionModelService } from "./functionModel.service";
import { FunctionModelControllerBase } from "./base/functionModel.controller.base";

@swagger.ApiTags("functionModels")
@common.Controller("functionModels")
export class FunctionModelController extends FunctionModelControllerBase {
  constructor(protected readonly service: FunctionModelService) {
    super(service);
  }
}
