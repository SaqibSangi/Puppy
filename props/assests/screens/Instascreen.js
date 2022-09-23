import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon1 from 'react-native-vector-icons/Entypo'
const Instascreen = () => {
  return (
    <View style ={style.MainView}>
       <View style ={style.header}>
       <Text style ={style.Instascreen}>𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒</Text>
       <Icon name='sc-telegram' size={40} color={'black'} style={style.Icon}/>
       </View>
       <View style ={style.imgcontainer}>
       <Image style={style.img} source={require('../assests/images/Person/1.jpg')}/>
       <Image style={style.img} source={require('../assests/images/Person/2.jpg')}/>
       <Image style={style.img} source={require('../assests/images/Person/3.jpg')}/>
       <Image style={style.img} source={require('../assests/images/Person/4.jpg')}/>
       </View>
      <View style={style.profilecontainer}>
      <Image style={style.profile} source={require('../assests/images/Person/1.jpg')}/>
      <Text style={style.profiletxt}>Zeeshan_005</Text>
      <Icon1 style={style.profileicon} name='dots-three-vertical'size={20}/>
      </View>
      <View style={style.postview}>
        <Image style={style.post} source={require('../assests/images/Person/4.jpg')}/>
      </View>
      <View style={style.bottomview}>
        <Icon1 name='home'size={30}/>
        <Icon name='search'size={30}/>
        <Icon1 name='squared-plus'size={30}/>
        <Icon1 name='heart-outlined'size={30}/> 
       <Image style={style.profile} source={require('../assests/images/Person/1.jpg')}/>
      </View>
      
    </View>
  )
}

export default Instascreen

const style = StyleSheet.create({
MainView:{
    flex:1,
    backgroundColor:'white'
},
header:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5
},
Instascreen:{
    fontSize:30,
    color:'black',
    fontWeight:'800',
    marginLeft:10
},
Icon:{
    marginRight:5
},
imgcontainer:{
    flexDirection:'row',
    marginTop:20
},
img:{
   height:80,
   width:80,
   borderRadius:80,
   marginHorizontal:5,
   borderWidth:2,
   borderColor:'red'
},
profile:{
    height:40,
    width:40,
    borderRadius:80,
    marginLeft:10,
    borderWidth:2,
    borderColor:'red'
},
profilecontainer:{
   flexDirection:'row',
   justifyContent:'space-between',
   marginTop:20,
   alignItems:'center',
   paddingVertical:10
},
profileicon:{
    marginRight:5
},
profiletxt:{
   marginRight:170,
   fontSize:20,
   color:'black',
   fontWeight:'800'
},
post:{
    height:500,
    width:370
},
postview:{
    alignItems:'center',
    marginTop:10
}, 
bottomview:{
  height:50,
  width:'100%',
  backgroundColor:'white',
  flexDirection:'row',
  justifyContent:'space-evenly',
  marginTop:2,
  alignItems:'center',
  elevation:5
},

})







