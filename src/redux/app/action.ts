import { createAction } from "@reduxjs/toolkit";

export const setLoading = createAction("app/setLoading", (args) => ({ payload: args }));
export const setLoadingSuccess = createAction("app/setLoadingSuccess", (args) => ({ payload: args }));
export const setLoadingFail = createAction("app/setLoadingFailed");
