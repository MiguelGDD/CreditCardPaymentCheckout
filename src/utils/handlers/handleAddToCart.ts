import {AppDispatch} from '../../redux/store';
import {addProductToCart} from '../../redux/slices/productSlice';

export const handleAddToCart = (
  dispatch: AppDispatch,
  product: {id: string; name: string; price: number},
) => {
  dispatch(addProductToCart(product));
};
