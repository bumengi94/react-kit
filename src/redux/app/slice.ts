import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
	name: "app",
	initialState: {
		loading: false,
	},
	reducers: {
		setLoadingSuccess: (state, action) => {
			state.loading = action.payload;
		},
	},
});
