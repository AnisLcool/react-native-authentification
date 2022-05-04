import { StyleSheet, View } from 'react-native';
import Header from './components/Header/Header';
import Login from './containers/Login/Login';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Login />

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 50,
    
  },
});
