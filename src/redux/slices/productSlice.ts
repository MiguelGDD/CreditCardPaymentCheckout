import {createSlice} from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductState {
  items: Product[];
  cart: Product[];
}

const initialState: ProductState = {
  items: [
    {id: '1', name: 'Producto A', price: 100},
    {id: '2', name: 'Producto B', price: 200},
  ],
  cart: [],
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
    addProductToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const {setProducts, addProduct, addProductToCart} = productSlice.actions;
export default productSlice.reducer;
