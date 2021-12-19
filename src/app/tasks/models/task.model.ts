export interface ITask {
    id: string;
    text: string;
    completed: boolean;
}

export class Task implements ITask{
    id: string = '';
    text: string = '';
    completed: boolean = false;

    constructor(text: string) {
        this.text = text;
    }
}
