import { Injectable } from '@nestjs/common';
import admin from "firebase-admin";

@Injectable()
export class FirestoreService {
    constructor(private firestore: admin.firestore.Firestore) {}

    getClient(): admin.firestore.Firestore {
        return this.firestore;
    }
}
