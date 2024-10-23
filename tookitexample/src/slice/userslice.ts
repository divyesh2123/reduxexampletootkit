import { createSlice } from '@reduxjs/toolkit'
import { IAction } from './counterslice'


export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
  }
  
  export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
  }
  
  export interface Geo {
    lat: string
    lng: string
  }
  
  export interface Company {
    name: string
    catchPhrase: string
    bs: string
  }


export interface IUserReducerSlice
{

    data : IUser[],
    isLoading: boolean,
    error:any
}

const initialState : IUserReducerSlice= {
data:[],
error: {},
isLoading: false

}

const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {

   
    UseRequest : (state: IUserReducerSlice)=>{

        state.isLoading = true;
   },

   UseSuc : (state: IUserReducerSlice,action: IAction<IUser[]>)=>{

    state.isLoading = false;
    state.data = action.payload??[]
},
UseError : (state: IUserReducerSlice,action: IAction<any>)=>{

    state.isLoading = false;
    state.error = action.payload
},

  }
});

export const {UseRequest,UseSuc,UseError} = userslice.actions

export default userslice.reducer