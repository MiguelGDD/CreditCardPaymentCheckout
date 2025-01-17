import productReducer, {
  addProduct,
  setProducts,
} from '../../../src/redux/slices/productSlice';

describe('productSlice', () => {
  const initialState = {items: []};

  it('should handle initial state', () => {
    expect(productReducer(undefined, {type: '@@INIT'})).toEqual(initialState);
  });

  it('should handle setProducts', () => {
    const products = [{id: '1', name: 'Product A', price: 100}];
    expect(productReducer(initialState, setProducts(products))).toEqual({
      items: products,
    });
  });

  it('should handle addProduct', () => {
    const newState = productReducer(
      initialState,
      addProduct({id: '1', name: 'Product A', price: 100}),
    );
    expect(newState.items.length).toBe(1);
    expect(newState.items[0].name).toBe('Product A');
  });
});
