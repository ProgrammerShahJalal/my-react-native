import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const About = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 130, height: 130, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10 }}>
                <Text style={{ color: 'white', paddingHorizontal: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>ABOUT CAR APP</Text>
            </View>
            <View style={{ width: 130, height: 130, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                <Text style={{ color: 'white', paddingHorizontal: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>ABOUT DEVELOPER</Text>
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({})
