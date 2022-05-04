import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
const Input = ({ children, placeHolder, value, onChangeInput, errorMsg, isPassword }) => {
    const testFct = () => {
        console.log('BONJOUR');
    }
    return (
        // secureTextEntry = true , false
        // eye-slash
        <>
            <View style={styles.container}>
                <View>{children}</View>

                <TextInput onChangeText={onChangeInput} style={styles.input} placeholder={placeHolder}
                    value={value} />

                {isPassword ?

                    (<TouchableOpacity onPress={testFct}>
                        <FontAwesome name='eye' size={24} color='green' />
                    </TouchableOpacity>) :

                        null}
                {/* {isPassword && <FontAwesome name='eye' size={24} color='green' />} */}
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