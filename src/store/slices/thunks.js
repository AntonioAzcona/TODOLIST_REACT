import { setTasks } from "./todoSlice"

export const getTasks = ( newTaskList = [] ) => {

    return async(dispatch, getState) => {
        
        dispatch( setTasks({ taskList: newTaskList }) );
    }
}