import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './store/store';
import { IUser, UseError, UseRequest, UseSuc } from './slice/userslice';

export default function UserInfo() {

    const d = useSelector<AppState>(y=>y.user.data) as IUser[];

    console.log(d);

    const dis = useDispatch<AppDispatch>();
 
    const myinc = ()=>{
 
     dis(UseRequest());

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(y=>y.json())
        .then(y=>{
            dis(UseSuc(y));
        }).catch(p=>{
            dis(UseError(p));
        })

    }

  return (
    <div>UserInfo

      <button onClick={myinc}>call API</button>
    </div>
  )
}
