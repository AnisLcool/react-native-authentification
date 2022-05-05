import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from './components/Header/Header';
import Login from './containers/Login/Login';
import Home from './components/Home/Home';
import { UserContext } from './context/userContext';

export default function App() {
  const [user, setUser] = useState({ isAuth: false, email: '' })

  const logInHandler = (userEmail) => {
    setUser({isAuth: true, email: userEmail})
  };

  const logOutHandler = () => {
    setUser({isAuth: false, email:''})
  }
  
  // 2eme solution 
  let content;
  if (user.isAuth) {
    content = <Home  />
  } else {
    content = <>
      <Header />
      <Login />
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
    
      <UserContext.Provider value={{user: user, logIn: logInHandler, logOut: logOutHandler}}>
        <View style={styles.container}>
          {content}
        </View>
      </UserContext.Provider>
     
    
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
