import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ordersReducer from '../features/orders/ordersSlice';
import productsReducer from '../features/products/productsSlice';
import productTypeReduser from '../features/productType/productTypeSlice';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    products: productsReducer,
    productType: productTypeReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
