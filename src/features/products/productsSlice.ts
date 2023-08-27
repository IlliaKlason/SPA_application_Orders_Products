import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/data';
import { Product } from '../../types/Products';

export interface ProductsState {
  products: Product[];
  loaded: boolean;
  hasError: boolean;
}

const initialState: ProductsState = {
  products,
  loaded: false,
  hasError: false,
};

const productsSlise = createSlice({
  name: 'products',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
        state.products = state.products.filter((product) => product.order !== action.payload);
    },
  },
});

export default productsSlise.reducer;
export const { remove } = productsSlise.actions;
