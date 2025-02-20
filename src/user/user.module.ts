import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UntilityModule } from 'src/shared/untility/untility.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [UntilityModule]
})
export class UserModule {}
