import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Button from '../Ui/Button/Button';
import { UserContext } from '../../context/userContext';


const Home = ({logOut}) => {
  const userContext = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>Home</Text>
      <Button styleBtn={{backgroundColor:'crimson'}} onPressHandler={userContext.logOut}>Logout</Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})