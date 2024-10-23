import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IAction } from './counterslice';


export const fetchTodos = createAsyncThunk(
    "todos/fetch", 
    async () => {
      // Fetch the backend endpoint:
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
  
      // Get the JSON from the response:
      const data = await response.json();
      
      // Return result:
      return data;
    }
  );

export interface IToDo
{
    userId: number
    id: number
    title: string
    completed: boolean
}



export interface ToDoReducer
{
    data : IToDo[],
    error: any,
    isRequest: boolean
}


const initialState: ToDoReducer  = {
    data : [],
    error : {},
    isRequest: false

}

const todosslice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchTodos.pending, (state) => {
        // At that moment,
        // we change status to `loading` 
        // and clear all the previous errors:
        state.isRequest = true;
        state.error = null;
      });

      builder.addCase(fetchTodos.rejected, (state,action:IAction<any>) => {
        // At that moment,
        // we change status to `loading` 
        // and clear all the previous errors:
        state.isRequest = false;
        state.error = action.payload;
    
      });

      builder.addCase(fetchTodos.fulfilled, (state,action:IAction<IToDo[]>) => {
        // At that moment,
        // we change status to `loading` 
        // and clear all the previous errors:
        state.isRequest = false;
        state.error = null;
        state.data = action.payload?? []
      });
  

    
  }
});

export const {} = todosslice.actions

export default todosslice.reducer