import { configureStore } from "@reduxjs/toolkit";

import co from '../slice/counterslice';
import user from '../slice/userslice'
import todo from '../slice/todosslice';
import comments from '../slice/commentsslice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer : {

        counter: co,
        user: user,
        todo:todo,
        comments: comments
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)

});

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;