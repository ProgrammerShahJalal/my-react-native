import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Details = (props) => {
    return (
        <View>
            <Text>details page of {props.name}</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})
