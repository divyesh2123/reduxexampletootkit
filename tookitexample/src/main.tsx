import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.ts'
import Counter from './Counter.tsx'
import UserInfo from './UserInfo.tsx'
import ToDoList from './ToDoList.tsx'
import Comments from './Comments.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

  
    <Comments />
    </Provider>
  </StrictMode>,
)
