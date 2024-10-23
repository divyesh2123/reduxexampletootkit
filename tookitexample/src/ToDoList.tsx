import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './store/store';
import { fetchTodos, IToDo } from './slice/todosslice';

export default function ToDoList() {

    const d = useSelector<AppState>(y=>y.todo.data) as IToDo[];

    console.log(d);

    const dis = useDispatch<AppDispatch>();

    useEffect(()=>{

        dis(fetchTodos());
    },[])

  return (
    <div>ToDoList</div>
  )
}
