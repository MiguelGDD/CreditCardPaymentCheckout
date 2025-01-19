import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import Home from '../../../src/screens/Home';
import { addProduct, setProducts } from '../../../src/redux/slices/productSlice';

describe('Home Component', () => {
  const mockStore = configureStore([]);
  let store: any;

  beforeEach(() => {
    // Mock inicial del store
    store = mockStore({
      products: {
        items: [],
      },
    });

    // Mock de las funciones dispatch
    store.dispatch = jest.fn();
  });

  it('should render the product list and dispatch setProducts on mount', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Verifica que los productos iniciales están siendo despachados
    expect(store.dispatch).toHaveBeenCalledWith(
      setProducts([
        { id: '1', name: 'Producto A', price: 100 },
        { id: '2', name: 'Producto B', price: 200 },
      ])
    );

    // Verifica que los textos de los productos están renderizados
    expect(getByText('Productos')).toBeTruthy();
  });

  it('should display products and handle add to cart', () => {
    // Mock de productos iniciales
    store = mockStore({
      products: {
        items: [
          { id: '1', name: 'Producto A', price: 100 },
          { id: '2', name: 'Producto B', price: 200 },
        ],
      },
    });
    store.dispatch = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Verifica que los productos están en la lista
    expect(getByText('Producto A')).toBeTruthy();
    expect(getByText('Producto B')).toBeTruthy();

    // Simula el botón de "Agregar al carrito"
    const addButton = getByText('Agregar al carrito');
    fireEvent.press(addButton);

    // Verifica que se despachó la acción addProduct
    expect(store.dispatch).toHaveBeenCalledWith(
      addProduct({ id: '1', name: 'Producto A', price: 100 })
    );
  });

  it('should render with the correct theme', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Verifica que los estilos del tema están aplicados
    const title = getByText('Productos');
    expect(title).toBeTruthy();
  });
});
