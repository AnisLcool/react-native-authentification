import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from './components/Header/Header';
import Login from './containers/Login/Login';
import Home from './components/Home/Home';
export default function App() {
  const [page, setPage] = useState('Login');

  const changePageState = () => {
    setPage('Home');
  }
  const logOut = () => {
    setPage('Login')
  }
  // 2eme solution 
  let content;
  if (page === 'Home') {
    content = <Home logOut={logOut} />
  } else {
    content = <>
      <Header />
      <Login changePageState={changePageState} />
    </>
  }
  return (
    // 2eme solution 
    // <View style={styles.container}>
    //   {page === 'Home' ? <Home /> :
    //     <>
    //       <Header />
    //       <Login changePageState={changePageState} />

    //     </>}
    // </View>
    // 1ere solution
    <View style={styles.container}>
      {content}
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
