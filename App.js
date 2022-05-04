import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Input from './components/Ui/Input/Input';
import { Entypo } from '@expo/vector-icons';
import Card from './components/hoc/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Card header='Please, login here!'>
        <Input>
          <Entypo name='email' size={24} color='royalblue' />
        </Input>

      </Card>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 50
  },
});
