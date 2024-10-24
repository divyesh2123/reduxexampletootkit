import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAction } from './counterslice'

export interface IComments
{
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface ICommentsReducer
{
    data : IComments[],
    isLoading: boolean,
    error: any
}

const initialState : ICommentsReducer  = {

    data: [],
    error: {},
    isLoading:false
}

const commentsslice = createSlice({
  name: 'comments',
  initialState,
  reducers: {

    CommentsRequest : (state: ICommentsReducer)=>{

        state.isLoading = true;
   },

CommentsSuc : (state: ICommentsReducer,action: PayloadAction <IComments[]>) =>
{

    state.isLoading = false;
    state.data = action.payload??[]
},
CommentsError : (state: ICommentsReducer,action: PayloadAction <any>)=>{
    state.isLoading = false;
    state.error = action.payload
} 


  }
});

export const {CommentsRequest,CommentsSuc,CommentsError} = commentsslice.actions

export default commentsslice.reducer