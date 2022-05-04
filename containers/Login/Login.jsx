import { StyleSheet } from 'react-native'
import React from 'react'
import Card from '../../components/hoc/Card'
import Input from '../../components/Ui/Input/Input'
import Button from '../../components/Ui/Button/Button'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const Login = () => {
    return (
        <Card header='Please, login here!'>
            <Input>
                <Entypo name='email' size={24} color='royalblue' />
            </Input>

            <Input>
                <MaterialCommunityIcons name='form-textbox-password' size={24} color='royalblue' />
            </Input>

            <Button>Login</Button>
        </Card>
    )
}

export default Login

const styles = StyleSheet.create({})