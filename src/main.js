import { app,auth,provider} from './firebase';
import { signInWithPopup,createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect,useState } from 'react';
import Login from './login'
import Home from './Home';


export default function Main() {

  const [UID,SetUID] = useState(null)

  onAuthStateChanged(auth,(user)=>
  {if(user){
    SetUID(user.email)

  }
  else{
    SetUID(null)
  }
})

  return (
    <View>
        {UID? <Home />:<Login/>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
