import { StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react'
import Card from '../../components/hoc/Card'
import Input from '../../components/Ui/Input/Input'
import Button from '../../components/Ui/Button/Button'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { UserContext } from '../../context/userContext'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // définir le consumer
    const userContext = useContext(UserContext)



    const onChangeEmail = (text) => {
        setEmail(text)
    };

    const onChangePassword = (text) => {
        if (!text.includes(' ')) {
            console.log('here');
            setPassword(text)
        }
    }

    const emailValidation = (email) => {
        return email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    }

    const loginHandler = () => {
        // regex
        if (emailValidation() && password.length >= 6) {

            setEmail('');
            setPassword('');
            setEmailError('');
            setPasswordError('');
            userContext.logIn(email);
        } else {
            //    email.includes('@') <=> email.includes('@') === true;

            setEmailError(email.includes('@') ? '' : 'incorrect email');
            setPasswordError(password.length >= 6 ? '' : 'password incorrect (must be at least 6 characters)');
        }
    }
    return (

        <Card header='Please, login here!'>
            <Input onChangeInput={onChangeEmail}
                errorMsg={emailError}
                value={email} placeHolder='Email'
            >
                <Entypo name='email' size={24} color='royalblue' />
            </Input>


            <Input onChangeInput={onChangePassword}
                errorMsg={passwordError}
                value={password}
                placeHolder='Password'
                isPassword >
                <MaterialCommunityIcons name='form-textbox-password' size={24} color='royalblue' />

            </Input>

            <Button onPressHandler={loginHandler}>Login</Button>
        </Card>
    )
}

export default Login

const styles = StyleSheet.create({})