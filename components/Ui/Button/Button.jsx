import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({onPressHandler,children, styleBtn}) => {
  // <div class='class1 classe2'></div>
  return (
    // styleBtn = backgroundColor : 'crimson'
    <TouchableOpacity style={[styles.btn, styleBtn]} onPress={onPressHandler}>
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
        fontSize: 25,
        marginVertical: 10
    },
    
})