import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button,FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { auth} from './../firebase.js';
import {FAB} from 'react-native-elements'


function ListScreen() {

  const [Screen,SetScreen] = useState(1)
  const [edit,Setedit] = useState()
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [tlist,Settlist]=useState([{title:'Finish app',sub:'type shit and pray',color:'#2A9D8F',id:0},{title:'Neglet everything',sub:'you deserve a year off for your mental health',color:'#e5383b',id:1}])
  const date = new Date()
  useEffect(()=>{
    
  },[])

  const Edit = () => {
    const [Title,SetTitle] = useState(edit.title)
    const [Color,SetColor] = useState(edit.color)
    const [Sub,SetSub] = useState(edit.sub)

    const handleSave = () => {
      const ogTitle = edit.title
      const ogColor = edit.color
      const ogSub = edit.sub

      if(ogTitle != Title){
        console.log("Title changed to "+Title)
      }

    }

    return(
      <View style={{backgroundColor:'#EFD595',height:'100%',justifyContent:'flex-start',}}>
      <Text style={styles.Text}>Edit Item</Text>
      <View style={{alignContent:'center',alignItems:'center'}}>
      <TextInput placeholder='Title' style={styles.TextInput} value={Title} onChangeText={text => SetTitle(text)}/>
      <TextInput placeholder='Description' style={styles.TextInput} value={Sub} onChangeText={text => SetSub(text)}/>
      <Text style={{color:"#A40000"}}>{Error}</Text>
        </View>
      <View style={{backgroundColor:Color,width:'80%',height:175,alignSelf:'center',marginVertical:20,borderRadius:10,justifyContent:'space-around'}}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={{backgroundColor:'#000',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#000")}}/>
          <TouchableOpacity style={{backgroundColor:'#7D0E20',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#7D0E20")}}/>
          <TouchableOpacity style={{backgroundColor:'#8C705F',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#8C705F")}}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={{backgroundColor:'#fff',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#fff")}}/>
          <TouchableOpacity style={{backgroundColor:'#2A9D8F',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#2A9D8F")}}/>
          <TouchableOpacity style={{backgroundColor:'#FFCE51',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#FFCE51")}}/>
        </View>
      </View>
      <View style={{alignItems:'center',justifyContent:'space-evenly',flexDirection:'row',marginVertical:20}}>
        <TouchableOpacity style={{width:'93%'}} onPress={()=>{Setedit()}}>
          <View style={{backgroundColor:'#335F70',width:'100%',height:50,borderRadius:10,justifyContent:'center'}}>
            <Text style={{color:"#fff",alignSelf:'center',fontSize:20}}>Push to Tomorrow</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:'center',justifyContent:'space-evenly',flexDirection:'row'}}>
        <TouchableOpacity style={{width:'45%'}} onPress={()=>{Setedit()}}>
          <View style={{backgroundColor:'#335F70',width:'100%',height:50,borderRadius:10,justifyContent:'center'}}>
            <Text style={{color:"#fff",alignSelf:'center',fontSize:20}}>Back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'45%'}} onPress={()=>{handleSave()}}>
          <View style={{backgroundColor:'#335F70',width:'100%',height:50,borderRadius:10,justifyContent:'center'}}>
            <Text style={{color:"#fff",alignSelf:'center',fontSize:20}}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    )
    
  }




  const Add = () => {

    const [Title,SetTitle] = useState('')
    const [Color,SetColor] = useState('#fff')
    const [Sub,SetSub] = useState('')
    const [Error,SetError] = useState('')
    
    const HandleAdd = ()=>{
      if(Title.length && Sub.length){
      const Lis = {title:Title,sub:Sub,color:Color,id:tlist.length}
      SetScreen(1)
      Settlist((tlist)=>{
        tlist.push(Lis)
        return [...tlist]
      })}
      else{
        SetError("Make sure to input your title and description!!")
      }
    }

    return(
      <View style={{backgroundColor:'#EFD595',height:'100%',justifyContent:'flex-start'}}>
      <Text style={styles.Text}>New Item</Text>
      <View style={{alignContent:'center',alignItems:'center'}}>
      <TextInput placeholder='Title' style={styles.TextInput} value={Title} onChangeText={text => SetTitle(text)}/>
      <TextInput placeholder='Description' style={styles.TextInput} value={Sub} onChangeText={text => SetSub(text)}/>
      <Text style={{color:"#A40000"}}>{Error}</Text>
        </View>
      <View style={{backgroundColor:Color,width:'80%',height:175,alignSelf:'center',marginVertical:20,borderRadius:10,justifyContent:'space-around'}}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={{backgroundColor:'#000',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#000")}}/>
          <TouchableOpacity style={{backgroundColor:'#7D0E20',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#7D0E20")}}/>
          <TouchableOpacity style={{backgroundColor:'#8C705F',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#8C705F")}}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={{backgroundColor:'#fff',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#fff")}}/>
          <TouchableOpacity style={{backgroundColor:'#2A9D8F',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#2A9D8F")}}/>
          <TouchableOpacity style={{backgroundColor:'#FFCE51',height:62.5,width:62.5,borderRadius:10}} onPress={()=>{SetColor("#FFCE51")}}/>
        </View>
      </View>
      <View style={{alignItems:'center',justifyContent:'space-evenly',flexDirection:'row'}}>
        <TouchableOpacity style={{width:'45%'}} onPress={()=>{SetScreen(1)}}>
          <View style={{backgroundColor:'#335F70',width:'100%',height:50,borderRadius:10,justifyContent:'center'}}>
            <Text style={{color:"#fff",alignSelf:'center',fontSize:20}}>Back</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'45%'}} onPress={()=>{HandleAdd()}}>
          <View style={{backgroundColor:'#335F70',width:'100%',height:50,borderRadius:10,justifyContent:'center'}}>
            <Text style={{color:"#fff",alignSelf:'center',fontSize:20}}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    )
  }

  const List = ()=>{
    return(
    <View style={styles.main}>
      
      <Text style={styles.Text}>{auth.currentUser.displayName? "Hi, "+auth.currentUser.displayName:"Welcome"}</Text>
      <View style={styles.body}> 
      <Text style={{paddingTop:10,paddingStart:20,fontWeight:'bold',color:'#335F70',fontSize:30}}>{monthNames[date.getMonth()]} {date.getDate()}</Text>
      <FlatList
      data={tlist}
      extraData={tlist}
      style={{paddingTop:10}}
      renderItem={({item})=>{
        return(
        <TouchableOpacity onPress={()=>{Setedit(item)}}>
        <View style={styles.item}>
          <View style={{backgroundColor:item.color,height:'100%',width:40,borderTopStartRadius:10,borderBottomStartRadius:10,marginEnd:10}}>
          </View>
          <View >
          <Text style={{fontSize:19,fontWeight:'bold'}}>{item.title}</Text>
          <Text style={{fontSize:15,color:'#6c757d'}}>{item.sub}</Text>
          </View>
        </View>
        </TouchableOpacity>)
      }}
      />
      </View>
      <FAB title={'+'} style={{position:'absolute',borderRadius:100}} buttonStyle={{backgroundColor:"#335F70",height:80,width:80,borderRadius:80}} placement="right" onPress={()=>{SetScreen(0)}}/>
    </View>)
  }
  return (
    edit? <Edit/> :
    Screen? <List/>:<Add/>
  )
}

const styles = StyleSheet.create({
  Text:{
    paddingTop:50,
    paddingLeft:20,
    alignSelf:'flex-start',
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
  body:{
    flex:9,
    backgroundColor:'#F4A261',
    height:'100%',
    width:'100%',
    borderTopEndRadius:20,
    borderTopStartRadius:20
  },
  item:{
    backgroundColor:'#fff',
    width:'90%',
    alignSelf:'center',
    borderRadius:10,
    height:60,
    flex:1 ,
    flexDirection:'row',
    marginBottom:10
  },
  main: {
    backgroundColor: '#EFD595',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default ListScreen;
