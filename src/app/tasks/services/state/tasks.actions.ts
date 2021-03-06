import { createAction, props } from "@ngrx/store";
import { Task } from "../../models/task.model";

export const addTask = createAction(
    '[Task List] Add Task',
    props<{ task: Task }>()
)

export const removeTask = createAction(
    '[Task List] Remove Task',
    props<{ task: Task }>()
)

export const updateTask = createAction(
    '[Task List] Update Task',
    props<{ task: Task }>()
)

export const loadTasks = createAction(
    '[Task List] Load Tasks',
    props<{ tasks: ReadonlyArray<Task> }>()
)