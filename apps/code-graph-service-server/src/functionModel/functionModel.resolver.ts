import * as graphql from "@nestjs/graphql";
import { FunctionModelResolverBase } from "./base/functionModel.resolver.base";
import { FunctionModel } from "./base/FunctionModel";
import { FunctionModelService } from "./functionModel.service";

@graphql.Resolver(() => FunctionModel)
export class FunctionModelResolver extends FunctionModelResolverBase {
  constructor(protected readonly service: FunctionModelService) {
    super(service);
  }
}
