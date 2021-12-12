import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

const about = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
                style={{ backgroundColor: 'blue', borderRadius: 20, margin: 5 }}
                onPress={()=>{navigation.navigate("contact")}}
            >
                <Text style={{padding: 15, color: 'white'}}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    )
}

export default about

const styles = StyleSheet.create({})
