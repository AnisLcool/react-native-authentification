import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({children}) => {
    return (
        <View style={styles.container}>
            <View>{children}</View>
            <TextInput style={styles.input}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray',
        marginVertical: 15,
        paddingHorizontal: 10

    },
    input: {
        padding: 10,
        width: '90%'
    },
    errorText: {
        color: "red"
    }
})