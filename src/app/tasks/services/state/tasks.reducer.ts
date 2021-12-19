import { createReducer, on } from "@ngrx/store";
import { Task } from "../../models/task.model";
import { addTask, loadTasks, removeTask, updateTask } from "./tasks.actions";

export const initialState: ReadonlyArray<Task> = [];

export const tasksReducer = createReducer(
    initialState,
    on(loadTasks, (state, { tasks }) => tasks),

    on(addTask, (state, { task }) => [...state, task]), 

    on(removeTask, (state, { task }) => {
        return state.filter((t: Task) => {
            return t.id !== task.id;
        })
    }),

    on(updateTask, (state, { task }) => {
        return state.map((t: Task) => {
            return t.id === task.id ? task : t;
        })
    })
)