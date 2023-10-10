import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { FirestoreModule } from 'src/firestore/firestore.module';
import { PropertyController } from './property.controller';
import { FirestoreService } from 'src/firestore/firestore.service';

@Module({
  imports: [FirestoreModule],
  providers: [PropertyService],
  controllers: [PropertyController]
})
export class PropertyModule {}
