import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

export default function Loading(props) {
  return (
    <View style = {styles.container}>
        <ActivityIndicator {...props}/>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,

    }
})