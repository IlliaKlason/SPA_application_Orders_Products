import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../types/ProductType';

const initialState = ProductType.ALL;

const productTypeSlice = createSlice({
  name: 'productType',
  initialState,
  reducers: {
    setProductType: (_state, action: PayloadAction<ProductType>) => {
      return action.payload
    },
  }
})

export default productTypeSlice.reducer;
export const { setProductType } = productTypeSlice.actions;