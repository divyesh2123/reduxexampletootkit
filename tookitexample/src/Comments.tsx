import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IToDo, fetchTodos } from './slice/todosslice';
import { AppState, AppDispatch } from './store/store';
import { CommentsRequest, IComments } from './slice/commentsslice';
import { UseRequest } from './slice/userslice';

export default function Comments() {

    const d = useSelector<AppState>(y=>y.comments.data) as IComments[];

    console.log(d);

    const dis = useDispatch<AppDispatch>();

    useEffect(()=>{

        dis(CommentsRequest());
    },[])

  return (
    <div>Comments</div>
  )
}
