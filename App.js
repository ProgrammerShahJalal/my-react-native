import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';

export default function App() {
  const image = { uri: "https://picsum.photos/200/300" };
  return (
    <>
      <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.paragraph}>
          <Text numberOfLines={7} onPress={() => { console.log('tapped') }}>This is Shah Jalal, a student of <Text style={{ color: 'darkblue', fontSize: 20 }}>Programming Hero</Text>. I'm an expert in HTML, CSS, React, JavaScript, Bootstrap, Tailwind, Node JS, Express JS, MongoDB, Material UI, React Bootstrap, React Router, React Hook Form, Firebase Authentication, WordPress. I'm also good at Photoshop and Illustrator.
          </Text>
          <Button
          title="Know More"
            color='goldenrod'
            onPress={()=>{console.log("Button Press")}}
          ></Button>
    </View>
    </ImageBackground>
        <View style={styles.box}>
          <TouchableOpacity
            activeOpacity={0.5}>
          <View style={{ height: 100, width: 100, backgroundColor: 'coral' }}></View>
          </TouchableOpacity>
          <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}>
        <View style={{height: 100, width: 100, backgroundColor: 'green'}}></View>
        </TouchableHighlight>
          <TouchableWithoutFeedback
          onPress={()=>alert('Touchable Without Feedback Clicked!')}>
          <View style={{ height: 100, width: 100, backgroundColor: 'orange' }}></View>
         </TouchableWithoutFeedback>
      </View>
        <Image source={ require("./assets/favicon.png")}/>
        <Image source={{ uri: "https://picsum.photos/200/300" }}
          style={{height: 200, width: 300}}/>
       
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 10
  }
});
