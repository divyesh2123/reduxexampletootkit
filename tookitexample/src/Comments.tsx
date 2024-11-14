import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { IToDo, fetchTodos } from './slice/todosslice';
import { AppState, AppDispatch } from './store/store';
import { CommentsRequest, IComments, ICommentsReducer } from './slice/commentsslice';
import { UseRequest } from './slice/userslice';

const mapStateToProps = (state : AppState) => ({
  message : state.comments
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getComments: () => dispatch(CommentsRequest())
});

export interface ICommentsPage
{
  message : ICommentsReducer
  getComments:Function
}
 


 function Comments(d123: ICommentsPage) {

  

  
    console.log(d123.message);

    const dis = useDispatch<AppDispatch>();

    useEffect(()=>{

        d123.getComments();
    },[])

  return (
    <div>Comments</div>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments)