import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Card from '../../components/hoc/Card'
import Input from '../../components/Ui/Input/Input'
import Button from '../../components/Ui/Button/Button'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const onChangeEmail = (text) => {
        setEmail(text)
    };

    const onChangePassword = (text) => {
        if(!text.includes(' ')){
            console.log('here');
            setPassword(text)
        }
    }

    const loginHandler = () => {
       if(email.includes('@') && password.length >= 6){
           console.log('email : ', email);
           console.log('password : ', password);
           setEmail('');
           setPassword('');
       }else{
           console.log('incorrect values');
       }
    }
    return (
        <Card header='Please, login here!'>
            <Input onChangeInput={onChangeEmail}  
            value={email} placeHolder='Email'>
                <Entypo name='email' size={24} color='royalblue' />
            </Input>
            

            <Input onChangeInput={onChangePassword}
             value={password} 
             placeHolder='Password'>
                <MaterialCommunityIcons name='form-textbox-password' size={24} color='royalblue' />
            </Input>

            <Button onPressHandler={loginHandler}>Login</Button>
        </Card>
    )
}

export default Login

const styles = StyleSheet.create({})