import {createSlice} from '@reduxjs/toolkit';

interface Transaction {
  id: string;
  status: 'pending' | 'success' | 'failed';
}

interface TransactionState {
  current: Transaction | null;
}

const initialState: TransactionState = {
  current: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    startTransaction: (state, action) => {
      state.current = action.payload;
    },
    completeTransaction: (state, action) => {
      if (state.current) {
        state.current.status = action.payload.status;
      }
    },
  },
});

export const {startTransaction, completeTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;
