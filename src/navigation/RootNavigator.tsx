import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {  NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import Header from '../components/common/Header';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
    >
      <Header title="Shop" />
    <Stack.Navigator
      initialRouteName="Home"
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
