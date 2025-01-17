import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { globalStyles } from '../../styles/global';
import { themes } from '../../styles/themes';
const SplashScreen = () => {
  const theme = themes.light; // Cambiar dinámicamente según el tema

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Text style={[globalStyles.title, { color: theme.text }]}>Bienvenido</Text>
      <Text style={[globalStyles.subtitle, { color: theme.text }]}>
        Cargando la aplicación...
      </Text>
      <ActivityIndicator size="large" color={theme.primary} style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
