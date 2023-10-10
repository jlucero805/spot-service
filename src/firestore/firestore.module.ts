import { Module } from '@nestjs/common';
import { FirestoreService } from './firestore.service';
import admin from "firebase-admin";

import config from "../../firebase_token.json"

const serviceAccount = {
  privateKey: config.private_key,
  clientEmail: config.client_email,
  projectId: config.project_id,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

@Module({
  controllers: [],
  providers: [
    { 
      provide: admin.firestore.Firestore,
      useValue: admin.firestore()
    },
    FirestoreService,
  ],
  exports: [FirestoreService]
})
export class FirestoreModule {}
