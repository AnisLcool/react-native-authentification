import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({ children, placeHolder, value, onChangeInput, errorMsg }) => {
    return (
        <>
            <View style={styles.container}>
                <View>{children}</View>
                <TextInput onChangeText={onChangeInput} style={styles.input} placeholder={placeHolder}
                    value={value} />
            </View>
            <Text style={{ color: 'red' }}>{errorMsg}</Text>
        </>
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