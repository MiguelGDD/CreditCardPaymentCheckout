import React from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { themes } from '../../styles/themes';
import { globalStyles } from '../../styles/global';
import { RootState } from '../../redux/store';
import { renderProduct } from '../../components/renderers/renderProduct';
import { handleAddToCart } from '../../utils/handlers/handleAddToCart';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const theme = themes.light;

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={(props) =>
          renderProduct({
            ...props,
            theme,
            handleAddToCart: (product) => handleAddToCart(dispatch, product),
          })
        }
      />
    </View>
  );
};

export default Home;
