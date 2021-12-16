import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Contact = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                style={{ backgroundColor: 'blue', borderRadius: 20, margin: 5 }}
                onPress={() => { navigation.navigate("home") }}
            >
                <Text style={{ padding: 15, color: 'white' }}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})
