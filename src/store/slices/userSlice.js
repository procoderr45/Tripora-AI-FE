import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        startLogin: (state) => {
            state.loading = true;
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

export const { removeUser, startLogin, addUser } = userSlice.actions;
export default userSlice.reducer;
