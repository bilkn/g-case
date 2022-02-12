import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, productReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(sagas);
