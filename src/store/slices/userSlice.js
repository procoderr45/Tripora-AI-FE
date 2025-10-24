import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeLoginLoadingStatus: (state, action) => {
            state.loading = action.payload;
        },
        addUser: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        },
    },
});

export const { removeUser, changeLoginLoadingStatus, addUser } = userSlice.actions;
export default userSlice.reducer;
