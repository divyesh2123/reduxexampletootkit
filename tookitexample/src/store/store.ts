import { configureStore } from "@reduxjs/toolkit";

import co from '../slice/counterslice';
import user from '../slice/userslice'
import todo from '../slice/todosslice';
const store = configureStore({
    reducer : {

        counter: co,
        user: user,
        todo:todo
    }

});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;