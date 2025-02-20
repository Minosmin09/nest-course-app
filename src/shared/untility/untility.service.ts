import { Injectable } from '@nestjs/common';

@Injectable()
export class UntilityService {
    shareFunction(): string{
        return 'use share untility shared module';
    }
}
