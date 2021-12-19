export class Task {
    id!: string;
    title: string;
    userId!: string;
    completed: boolean = false;

    constructor(title: string) {
        this.id = Date.now().toString();
        this.title = title;
    }
}
