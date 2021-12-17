import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import products from './Products';
import contact from './Contact';
import home from './Home';
import Todo from './ToDoList';
import Details from './Details';
import Icon from 'react-native-ico-material-design';


export default function App() {
  const drawer = useRef(null);
  const [drawerPosition] = useState("left");

  const Stack = createNativeStackNavigator();
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>Welcome to Car App</Text>

      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <Text onPress={() => drawer.current.openDrawer()}>
          <Icon name="menu-button" />
        </Text>
      </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={home}>
          <Stack.Screen name="Home" component={home} />
          <Stack.Screen name="Contact" component={contact} />
          <Stack.Screen name="Products" component={products} />
          <Stack.Screen name="Todo" component={Todo} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </DrawerLayoutAndroid>
  );

}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 40
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  menu: {
    margin: 0,
    padding: 0
  }
});
