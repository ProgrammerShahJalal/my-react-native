import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Welcome to Car App</Text>
      <Image
        style={{ width: "100%", height: 200 }}
        source={require('./images/car.png')}
        resizeMode='contain'
      />
      <Button
        title="Update Title" onPress={() => navigation.setOptions({ title: 'Updated Home' })}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

})
