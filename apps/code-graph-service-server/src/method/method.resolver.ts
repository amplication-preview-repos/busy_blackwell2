import * as graphql from "@nestjs/graphql";
import { MethodResolverBase } from "./base/method.resolver.base";
import { Method } from "./base/Method";
import { MethodService } from "./method.service";

@graphql.Resolver(() => Method)
export class MethodResolver extends MethodResolverBase {
  constructor(protected readonly service: MethodService) {
    super(service);
  }
}
