import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "~@redux/store";

const selfSelector = (state: RootState) => state.app;

export const loadingSelector = createSelector(selfSelector, (state) => state.loading);
