import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ToDoList from './ToDoList';


const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{ backgroundColor: 'blue', borderRadius: 20, margin: 5 }}
        onPress={() => { navigation.navigate("ToDoList") }}
      >
        <Text style={{ padding: 15, color: 'white' }}>Manage Todo List</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
