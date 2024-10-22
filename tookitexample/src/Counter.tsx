import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from './store/store'
import { inc } from './slice/counterslice';

export default function Counter() {
   const d = useSelector<AppState>(y=>y.counter.counter) as number;

   const dis = useDispatch<AppDispatch>();

   const myinc = ()=>{

    dis(inc());
   }
  return (
    <div>{d}

            <button onClick={myinc}>+</button>
            <button>-</button>
    
    </div>
  )
}
