import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { themes } from '../../styles/themes';
import { globalStyles } from '../../styles/global';
import { addProduct, setProducts } from '../../redux/slices/productSlice';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const theme = themes.light;

  useEffect(() => {
    const initialProducts = [
      { id: '1', name: 'Producto A', price: 100 },
      { id: '2', name: 'Producto B', price: 200 },
    ];
    dispatch(setProducts(initialProducts));
  }, [dispatch]);

  const handleAddToCart = (product: { id: string; name: string; price: number }) => {
    dispatch(addProduct(product));
  };

  const renderProduct = ({ item }: { item: { id: string; name: string; price: number } }) => (
    <View style={[globalStyles.card, { backgroundColor: theme.cardBackground }]}>
      <Text style={[globalStyles.title, { color: theme.text }]}>{item.name}</Text>
      <Text style={{ color: theme.text }}>${item.price}</Text>
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: theme.primary }]}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={[globalStyles.buttonText, { color: theme.buttonText }]}>Agregar al carrito</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Text style={[globalStyles.title, { color: theme.text }]}>Productos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />
    </View>
  );
};

export default Home;
