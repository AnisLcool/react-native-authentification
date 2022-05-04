import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({onPressHandler,children}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPressHandler}>
        <Text style={{color:'white'}}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'royalblue',
        padding: 12, 
        borderRadius: 5,
        fontSize: 25
    },
    
})