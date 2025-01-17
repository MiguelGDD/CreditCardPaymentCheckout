import {createSlice} from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const {setProducts, addProduct} = productSlice.actions;
export default productSlice.reducer;
