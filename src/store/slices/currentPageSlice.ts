import { createSlice } from '@reduxjs/toolkit';

const initialState: { page: number } = { page: 1 };

export const currentPageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    updateCurrentPage: (state) => {
      state.page += 1;
    },
    resetCurrentPage: (state) => {
      state.page = 1;
    },
  },
});

export const { updateCurrentPage, resetCurrentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
