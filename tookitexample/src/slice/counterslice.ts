import { createSlice } from '@reduxjs/toolkit'

export interface ICounter 
{

    counter: number;
}

const initialState : ICounter = {

    counter: 0
}

export interface IAction<T>
{
    type: string
    payload? : T
}
const counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

        inc : (state: ICounter,action: IAction<ICounter>)=>{

             state.counter = state.counter+1;
        },

        dec: (state: ICounter,action: IAction<ICounter>) =>{

            state.counter-1;
        }

  }
});

export const {inc,dec} = counterslice.actions

export default counterslice.reducer