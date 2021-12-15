import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import products from './products';
import contact from './contact';
import home from './home';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={home}>
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="contact" component={contact} />
        <Stack.Screen name="products" component={products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
