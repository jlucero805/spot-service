import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirestoreModule } from './firestore/firestore.module';
import { PropertyService } from './property/property.service';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [FirestoreModule, PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
