export class User {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    appointments: string[];

    constructor() {
        this.name = "";
        this.appointments = [];
    }
}
