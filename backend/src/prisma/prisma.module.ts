import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';

dotenvConfig({ path: join(__dirname, '../../.env') });

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
