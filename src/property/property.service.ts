import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';
import Property from 'src/models/Property';

@Injectable()
export class PropertyService {
    private readonly db =
        this.firestore
            .getClient()
            .collection('property');

    constructor (
        private firestore: FirestoreService
    ) {}

    async index(): Promise<Property[]> {
        const data = await this.db.get();
        const docs = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        return docs;
    }
    
    async show(id: string): Promise<Property> {
        const data = await this.db.doc(id).get();
        const doc = data.data();
        return {
            ...doc,
            id: data.id,
        };
    }

    async create(property: Property): Promise<Property> {
        const res = await this.db.add(property);
        return {
            ...property,
            id: res.id,
        };
    }

    async destroy(id: string) {
        const res = await this.db.doc(id).delete();
    }

}
