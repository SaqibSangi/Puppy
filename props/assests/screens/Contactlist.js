import { View, Text,Image, StyleSheet, TextInput,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
const App = () => {
  return (
    <View style={style.MainView}>
      <TouchableOpacity>
      <View style={style.header}>
        <TextInput placeholder='Search Contacts'/>
        <Icon style={style.Icon}name='search'size={35}/>
        <Icon1 name='settings'size={25}/>
      </View>
      </TouchableOpacity>
      <View>
      <Text style={style.text}>Contacts</Text>
      </View>
      <ScrollView>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/1.jpg')}/>
      <Text style={style.profiletxt}>Zeeshan</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/2.jpg')}/>
      <Text style={style.profiletxt}>Bilal</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/3.jpg')}/>
      <Text style={style.profiletxt}>Humza</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/4.jpg')}/>
      <Text style={style.profiletxt}>Husnain</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/1.jpg')}/>
      <Text style={style.profiletxt}>Asif</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/2.jpg')}/>
      <Text style={style.profiletxt}>Umer</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/3.jpg')}/>
      <Text style={style.profiletxt}>Jam</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/4.jpg')}/>
      <Text style={style.profiletxt}>Zain</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/1.jpg')}/>
      <Text style={style.profiletxt}>Zap</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/3.jpg')}/>
      <Text style={style.profiletxt}>Zuni</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/4.jpg')}/>
      <Text style={style.profiletxt}>Ain</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/1.jpg')}/>
      <Text style={style.profiletxt}>Zee</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/2.jpg')}/>
      <Text style={style.profiletxt}>shan</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/3.jpg')}/>
      <Text style={style.profiletxt}>Zhan</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/4.jpg')}/>
      <Text style={style.profiletxt}>Ali</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/1.jpg')}/>
      <Text style={style.profiletxt}>Zan</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/4.jpg')}/>
      <Text style={style.profiletxt}>Ahmi</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/3.jpg')}/>
      <Text style={style.profiletxt}>Sain</Text>
      </View>
      <View style={style.profilecontainer}> 
      <Image style={style.profile} source={require('./assests/images/Person/2.jpg')}/>
      <Text style={style.profiletxt}>ZEE</Text>
      </View>
      </ScrollView>
      <TouchableOpacity>
      <View style={style.bottomView}>
      <Icon2 name='watch-later'size={30}/>
      <Icon2 name='contacts'size={30}/>
      <Icon2 name='sim-card'size={30}/>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default App

const style = StyleSheet.create({
 MainView:{
  flex:1,
  // backgroundColor:'red'
 },
 header:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginHorizontal:15
 },
 Icon:{
  marginLeft:130
 },
 text:{
  fontSize:32,
  color:'black',
  fontWeight:'500',
  marginLeft:15,
  marginTop:5
 },
 profilecontainer:{
  flexDirection:'row',
  marginTop:20,
  alignItems:'center',
  marginLeft:15,
  marginTop:30
 },
profile:{
  height:45,
  width:45,
  borderRadius:100,
  marginLeft:10,
  borderWidth:1,
  borderColor:'black',
},
profiletxt:{
  marginLeft:10,
  color:'black',
  fontSize:17,
  fontWeight:'bold'
},
bottomView:{
  height:55,
  width:'100%',
  // backgroundColor:'red',
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'center',


}





})