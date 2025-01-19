import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import { themes } from '../../styles/themes';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
  onRightIconPress?: () => void;
  rightIcon?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  showBackButton = false,
  onRightIconPress,
  rightIcon = '🛒',
}) => {
  const theme = themes.light;
  const cartProducts = useSelector((state: RootState) => state.products.cart);


  return (
    <View style={[globalStyles.header, { backgroundColor: theme.secondary }]}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={globalStyles.backButton}>
          <Text style={[globalStyles.backButtonText, { color: theme.buttonText }]}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={[globalStyles.title, { color: theme.text }]}>{title}</Text>
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress} style={[{ backgroundColor: theme.primary, shadowColor: theme.black }, globalStyles.rightIcon]}>
          <Text style={[globalStyles.rightIconText, { color: theme.buttonText }]}>
            {rightIcon}
          </Text>
          {cartProducts.length > 0 && (
          <View style={globalStyles.notificationBubble}>
            <Text style={globalStyles.notificationText}>{cartProducts.length}</Text>
          </View>
        )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
