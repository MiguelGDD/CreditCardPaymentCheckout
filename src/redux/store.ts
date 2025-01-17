import {configureStore} from '@reduxjs/toolkit';
import transactionSlice from '../redux/slices/transactionSlice';
import productReducer from '../redux/slices/productSlice';
import {loggerMiddleware} from './middlewares/loggerMiddleware';

export const store = configureStore({
  reducer: {
    products: productReducer,
    transactions: transactionSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
