import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.text}>are you a member? login here!</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#093357',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 5,
        marginBottom:50
    },
    title: {
        textAlign: 'center',
        color: '#bbb',
        fontSize: 32,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        color: '#bbb',
        textAlign: 'center'
    }
})