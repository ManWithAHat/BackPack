import { app,auth,provider,HandleSignUp,HandleSignin} from './firebase';

import { StyleSheet, Text, View,TextInput,TouchableOpacity,Switch } from 'react-native';
import { useEffect,useState } from 'react';








export default function Login() {

  
  const [Account,SetAccount] = useState(1)

  function Signup(){

    const [Email,SetEmail] = useState('')
    const [Password,SetPassword] = useState('')
    const [Name,SetName] = useState('')
  
    
  
    return (
        <View style={styles.container}>
          <Text style={styles.Text}>Sign Up</Text>
          <TextInput placeholder='Email' style={styles.TextInput} value={Email} onChangeText={text => SetEmail(text)}/>
          <TextInput placeholder='Password' style={styles.TextInput} value={Password} onChangeText={text => SetPassword(text)}/>
          <TextInput placeholder='Name' style={styles.TextInput} value={Name} onChangeText={text => SetName(text)}/>
          <TouchableOpacity style={styles.Button} onPress={()=>{HandleSignUp(Email,Password,Name)}}>
            <Text style={{color:'#fff'}}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={()=>{SetAccount(1)}}>
            <Text style={{color:'#fff'}}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </View>
    );
  
  
  }
  
  function Lgin(){

    const [Email,SetEmail] = useState('')
    const [Password,SetPassword] = useState('')
  
    return(
      <View style={styles.container}>
        <Text style={styles.Text}>Log In</Text>
        <TextInput placeholder='Email' style={styles.TextInput} value={Email} onChangeText={text => SetEmail(text)}/>
        <TextInput placeholder='Password' style={styles.TextInput} value={Password} onChangeText={text => SetPassword(text)}/>
        <TouchableOpacity style={styles.Button} onPress={()=>{HandleSignin(Email,Password)}}>
          <Text style={{color:'#fff'}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={()=>{SetAccount(0)}}>
          <Text style={{color:'#fff'}}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  
  }


  return(
    <View style={styles.MainPage}>
      {Account? <Lgin/>:<Signup/>}
    </View>
  )

  
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#EFD595',
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center'
    },
    MainPage:{
      height:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#EFD595'
    },
    Text:{
      fontSize:40,
      color:'#2A9D8F',
      fontWeight:'bold'
    },
    TextInput:{
      width:'80%',
      height:50,
      borderRadius:10,
      backgroundColor:'#fff',
      marginTop:25,
      paddingLeft:10
    },
    Button:{
      backgroundColor:'#335F70',
      width:'80%',
      height:50,
      marginTop:25,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
    }
  });
  

