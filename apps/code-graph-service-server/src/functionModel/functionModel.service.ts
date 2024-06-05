import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FunctionModelServiceBase } from "./base/functionModel.service.base";

@Injectable()
export class FunctionModelService extends FunctionModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
