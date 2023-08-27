import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Order } from '../../types/Order';
import { orders } from '../../data/data';

export interface OrdersState {
  orders: Order[];
  loaded: boolean;
  hasError: boolean;
}

const initialState: OrdersState = {
  orders,
  loaded: false,
  hasError: false,
};

const ordersSlise = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
        state.orders = state.orders.filter((order) => order.id !== action.payload)
    },
  },
});

export default ordersSlise.reducer;
export const { remove } = ordersSlise.actions;
