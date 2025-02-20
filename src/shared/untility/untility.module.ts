import { Module } from '@nestjs/common';
import { UntilityService } from './untility.service';

@Module({
  providers: [UntilityService],
  exports:[UntilityService],
})
export class UntilityModule {}
