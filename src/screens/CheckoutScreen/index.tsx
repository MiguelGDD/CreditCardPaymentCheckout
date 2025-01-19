import React from 'react';
import { View, Text } from 'react-native';
import { themes } from '../../styles/themes';
import { globalStyles } from '../../styles/global';

const CheckoutScreen = () => {
  const theme = themes.light;

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Text style={[globalStyles.title, { color: theme.text }]}>Checkout</Text>
      <Text style={{ color: theme.text }}>Aquí puedes completar tu compra.</Text>
    </View>
  );
};

export default CheckoutScreen;
