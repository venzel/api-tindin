export interface CreateClassDTO {
    name: string;
    description: string;
    date_init: Date;
    date_end: Date;
    total_comments?: number;
}