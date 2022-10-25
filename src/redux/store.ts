import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appSlice } from "~@redux/app/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({ reducer: combineReducers({ app: appSlice.reducer }) });

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
