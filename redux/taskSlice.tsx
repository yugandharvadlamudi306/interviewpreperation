import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Task={
    id:number,
    name:string
};
type TaskState = {
    taskList:Task[];
}
const initialState:TaskState = {
    taskList: [],
}

const taskSlice = createSlice({
        name: "tasks",
        initialState,
        reducers: {
            addTask: (state, action:PayloadAction<Task>) => {
                state.taskList.push(action.payload);
            },
        },
    });
export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;