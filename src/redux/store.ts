import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appSlice } from "~@redux/app/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import Saga from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { appSaga } from "~@redux/app/saga";

const sagaMiddleware = Saga();
export const store = configureStore({
	reducer: combineReducers({ app: appSlice.reducer }),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ immutableCheck: true, thunk: false }).concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function* rootSaga() {
	yield all([appSaga].map(fork));
}

sagaMiddleware.run(rootSaga);
