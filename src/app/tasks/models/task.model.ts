export class Task {
    id!: string;
    title: string;
    userId!: string;
    completed: boolean = false;

    constructor(title: string) {
        this.title = title;
    }
}
