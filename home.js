import React from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { StyleSheet, View, SafeAreaView, Text, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Image, ImageBackground, ActivityIndicator } from 'react-native'

const home = ({navigation}) => {
    const image = { uri: "https://picsum.photos/200/300" };
  const { landscape } = useDeviceOrientation();
    return (
        <SafeAreaView style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.paragraph}>
            <Text numberOfLines={7} onPress={() => { console.log('tapped') }}>
              This is Shah Jalal, a student of <Text style={{ color: 'darkblue', fontSize: 20 }}>Programming Hero</Text>. I'm an expert in HTML, CSS, React, JavaScript, Bootstrap, Tailwind, Node JS, Express JS, MongoDB, Material UI, React Bootstrap, React Router, React Hook Form, Firebase Authentication, WordPress. I'm also good at Photoshop and Illustrator.
          </Text>
          <Button
          title="Know More"
            color='goldenrod'
            onPress={()=>{console.log("Button Press")}}
          ></Button>
    </View>
        </ImageBackground>
        <View style={{backgroundColor: 'green', width: "100%", height: landscape ? "100%" : "30%"}}>
          </View>
        <View style={styles.box}>
          <TouchableOpacity
            activeOpacity={0.5}>
          <View style={{ height: 100, width: 100, backgroundColor: 'coral' }}>
          </View>
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
            <TouchableOpacity
                style={{ backgroundColor: 'blue', borderRadius: 20, margin: 5 }}
                onPress={()=>{navigation.navigate("about")}}
            >
            <Text style={{padding: 15, color: 'white'}}>About Us</Text>
        </TouchableOpacity>
        <Image source={require("./assets/favicon.png")} />
        <ActivityIndicator size="large" color="#00ff00" />
        <Image source={{ uri: "https://picsum.photos/200/300" }}
          style={{height: 80, width: 200}}/>
      </SafeAreaView>
    )
}

export default home

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
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
      },
      paragraph: {
        textAlign: 'center',
      }
})
