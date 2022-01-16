import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import ToDoList from './ToDoList';
import Products from './Products';
import About from './About';
import Contact from './Contact';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{ title: 'Car App Home' }} />
        <Drawer.Screen name="Mange Todo List" component={ToDoList} />
        <Drawer.Screen name="Car Explore" component={Products} />
        <Drawer.Screen name="About Us" component={About} />
        <Drawer.Screen name="Contact Us" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

})