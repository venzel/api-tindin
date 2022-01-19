import { Class } from '../Class';

export class ClassInMemory implements Class {
    _id: any;
    name: string;
    description: string;
    date_init: Date;
    date_end: Date;
    date_created: Date;
    date_updated: Date;
    total_comments: number;
}