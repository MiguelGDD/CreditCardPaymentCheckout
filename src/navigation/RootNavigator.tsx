import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {  NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
    >
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
</NavigationContainer>
  );
};

export default RootNavigator;
