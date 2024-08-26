import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
    message: string;
}

const initialState: IAppState = {
    message: '',
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setMessage: (state: IAppState, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
});

export const { setMessage } = appSlice.actions;

export default appSlice.reducer;
