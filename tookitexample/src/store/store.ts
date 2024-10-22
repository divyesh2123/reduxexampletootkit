import { configureStore } from "@reduxjs/toolkit";

import co from '../slice/counterslice';

const store = configureStore({
    reducer : {

        counter: co
    }

});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;