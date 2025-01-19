import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';


interface RenderProductProps {
  item: { id: string; name: string; price: number };
  theme: {
    cardBackground: string;
    text: string;
    primary: string;
    buttonText: string;
  };
  handleAddToCart: (product: { id: string; name: string; price: number }) => void;
}

export const renderProduct = ({ item, theme, handleAddToCart }: RenderProductProps) => (
  <View style={[globalStyles.card, { backgroundColor: theme.cardBackground }]}>
    <Text style={[globalStyles.title, { color: theme.text }]}>{item.name}</Text>
    <Text style={{ color: theme.text }}>${item.price}</Text>
    <TouchableOpacity
      style={[globalStyles.button, { backgroundColor: theme.primary }]}
      onPress={() => handleAddToCart(item)}
    >
      <Text style={[globalStyles.buttonText, { color: theme.buttonText }]}>
        Agregar al carrito
      </Text>
    </TouchableOpacity>
  </View>
);
