import { createAction } from "@reduxjs/toolkit";

export const setLoading = createAction("app/setLoading", (args) => ({ payload: args }));
