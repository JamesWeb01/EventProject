import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../auth/password.service";
import { UserServiceBase } from "./base/user.service.base";
import { ExplodeUserInput } from "./ExplodeUserInput";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService);
  }
  
  async ExplodeUser(args: ExplodeUserInput): Promise<boolean> {
    return true;
  }
  
}
