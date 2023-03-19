import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AddCommentSchema } from '../../types';

const initialState: AddCommentSchema = {
  text: '',
};

const addCommentSlice = createSlice({
  name: 'addComment',
  initialState,
  reducers: {
    textSet: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { reducer: addCommentReducer, actions: addCommentActions } = addCommentSlice;
