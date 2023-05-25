import { Module } from "@nestjs/common";
import { PromptsResolver } from "./prompts.resolver";
import { PrismaService } from "../prisma.service";
import { PromptExecutionsResolver } from "./prompt-executions.resolver";
import { PromptsService } from "./prompts.service";
import { PromptTesterService } from "./prompt-tester.service";
import { CredentialsModule } from "../credentials/credentials.module";
import { IdentityModule } from "../identity/identity.module";

@Module({
  imports: [CredentialsModule, IdentityModule],
  exports: [PromptsService],
  providers: [
    PrismaService,
    PromptsResolver,
    PromptsService,
    PromptTesterService,
    PromptExecutionsResolver,
  ],
})
export class PromptsModule {}
