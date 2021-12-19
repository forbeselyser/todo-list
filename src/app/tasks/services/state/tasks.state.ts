import { Task } from "../../models/task.model";

export interface TasksState {
    tasks: ReadonlyArray<Task>;
}