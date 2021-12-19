export interface ITask {
    text: string;
    completed: boolean;
}

export class Task implements ITask{
    text: string;
    completed: boolean;

    constructor(text: string) {
        this.text = text;
        this.completed = false;
    }
}
