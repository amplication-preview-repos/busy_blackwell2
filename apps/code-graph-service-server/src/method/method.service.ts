import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MethodServiceBase } from "./base/method.service.base";

@Injectable()
export class MethodService extends MethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
