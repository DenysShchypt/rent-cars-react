import { createSlice } from '@reduxjs/toolkit';

// const handlePending = state => {
//     state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };


const initialState = {
    count: 0,
    isLoading: false,
    error: null
};

export const mySlice = createSlice({
    name: 'myReducer',
    initialState,
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //      .addCase(increment, (state) => {
    //             state.count++;
    //         })
    //      .addCase(decrement, (state) => {
    //             state.count--;
    //         });
    // },
});

export const { increment, decrement } = mySlice.actions;