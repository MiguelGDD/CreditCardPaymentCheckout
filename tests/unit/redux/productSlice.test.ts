import productReducer, {
  setProducts,
  addProduct,
  addProductToCart,
} from '../../../src/redux/slices/productSlice';

describe('productSlice', () => {
  const initialState = {
    items: [
      {id: '1', name: 'Producto A', price: 100},
      {id: '2', name: 'Producto B', price: 200},
    ],
    cart: [],
  };

  it('should handle initial state', () => {
    expect(productReducer(undefined, {type: ''})).toEqual(initialState);
  });

  it('should handle setProducts', () => {
    const newProducts = [
      {id: '3', name: 'Producto C', price: 300},
      {id: '4', name: 'Producto D', price: 400},
    ];

    const newState = productReducer(initialState, setProducts(newProducts));

    expect(newState.items).toEqual(newProducts);
  });

  it('should handle addProduct', () => {
    const newProduct = {id: '3', name: 'Producto C', price: 300};

    const newState = productReducer(initialState, addProduct(newProduct));

    expect(newState.items).toContainEqual(newProduct);
    expect(newState.items.length).toBe(3);
  });

  it('should handle addProductToCart', () => {
    const productToAdd = {id: '1', name: 'Producto A', price: 100};

    const newState = productReducer(
      initialState,
      addProductToCart(productToAdd),
    );

    expect(newState.cart).toContainEqual(productToAdd);
    expect(newState.cart.length).toBe(1);
  });
});
