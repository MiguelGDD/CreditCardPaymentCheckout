import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { themes } from '../../styles/themes';
import { globalStyles } from '../../styles/global';
import { RootState } from '../../redux/store';

const CartScreen = ({ navigation }: any) => {
  const cartItems = useSelector((state: RootState) => state.products.items);
  const theme = themes.light;

  const handleCheckout = () => {
    navigation.navigate('Checkout');
  };

  const renderCartItem = ({ item }: { item: { id: string; name: string; price: number } }) => (
    <View style={[globalStyles.card, { backgroundColor: theme.cardBackground }]}>
      <Text style={[globalStyles.title, { color: theme.text }]}>{item.name}</Text>
      <Text style={{ color: theme.text }}>${item.price}</Text>
    </View>
  );

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Text style={[globalStyles.title, { color: theme.text }]}>Carrito</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
      />
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: theme.secondary }]}
        onPress={handleCheckout}
      >
        <Text style={[globalStyles.buttonText, { color: theme.buttonText }]}>Proceder al Pago</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
