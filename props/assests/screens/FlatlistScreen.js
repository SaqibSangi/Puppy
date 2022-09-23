import { View, Text,StyleSheet, SafeAreaView,Image,TextInput ,FlatList} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import FlatListScreen from '../../App'



const Itemstyle=(props) =>(
  <View>
    <View style={{marginTop:20}} >
    <Icon name={props.item.icn} size={25} color={'red'} style={{backgroundColor:'white',marginHorizontal:10,padding:12,elevation:10}}/>
    <Text style={{textAlign:'center'}}>{props.item.txt}</Text>
    </View>
  </View>
)


const Itemstyle1=(props) =>(
  <View style={{marginHorizontal:10,marginTop:15}}>
    <View  >
   <Image source={props.item.img}/>
   
    </View>
    <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:5,marginTop:5}}>
      {props.item.title}
    </Text>
    <Text style={{fontSize:13,marginLeft:10,marginTop:5}}>
      {props.item.txt}
    </Text>
  </View>
)

const App = () => {
  const Data=[
    {
      icn : 'notification',
      txt:'Salon'
    },
    {
      icn : 'meh',
      txt:'Salon'
    },
    {
      icn : 'meh',
      txt:'Salon'
    }, {
      icn : 'meh',
      txt:'Salon'
    }, {
      icn : 'meh',
      txt:'Salon'
    }, {
      icn : 'meh',
      txt:'Salon'
    }, {
      icn : 'meh',
      txt:'Salon'
    }, {
      icn : 'meh',
      txt:'Salon'
    }, {
      icn : 'meh',
      txt:'Salon'
    }, {
      icn : 'meh',
      txt:'Salon'
    },
  ]
  const Data1=[
    {
img:require('./assests/images/eye.jpg'),
title :'Lorem Ipsums Salon',
txt :'Lorem Ipsums Salon is on sale'
    },
    {
      img:require('./assests/images/eye.jpg'),
      title :'Lorem Ipsums Salon',
      txt :'Lorem Ipsums Salon is on sale'
          },
          {
            img:require('./assests/images/eye.jpg'),
            title :'Lorem Ipsums Salon',
            txt :'Lorem Ipsums Salon is on sale'
                },
                {
                  img:require('./assests/images/eye.jpg'),
                  title :'Lorem Ipsums Salon',
                  txt :'Lorem Ipsums Salon is on sale'
                      },
                      {
                        img:require('./assests/images/eye.jpg'),
                        title :'Lorem Ipsums Salon',
                        txt :'Lorem Ipsums Salon is on sale'
                            },
  ]
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style ={styles.eyeView}>
        <Image style= {styles.Image} source={require('./assests/images/Drawer.png')} />
        <Text style ={styles.Home}>Home</Text>
      </View>
      <View style = {styles.bar}>
        <Image style={styles.image2} source= {require('./assests/images/bar1.png')}/>
        <Text style ={styles.Services}>Services</Text>
        <Image style={styles.image3} source= {require('./assests/images/bar2.png')}/> 
      </View>
      <View style = {styles.bar2}>
<TextInput style={styles.input} placeholder='Search'/>
<Icon name='search1' size={20} style={{marginRight:15}}/>
      </View>
      <View>
<FlatList
data={Data}
renderItem={Itemstyle}
horizontal={true}
contentContainerStyle={{
  height:90

}}
/>
</View>
<View style={{marginLeft:20,marginTop:10}}>
  <Text style={{fontSize:25,fontWeight:'900'}}>Near You</Text>
  <FlatList
  data={Data1}
  renderItem={Itemstyle1}
  horizontal={true}
  />
</View>
<View style={{marginLeft:20,marginTop:10}}>
  <Text style={{fontSize:25,fontWeight:'900'}}>Top Rated</Text>
  <FlatList
  data={Data1}
  renderItem={Itemstyle1}
  horizontal={true}
  />
</View>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  conatiner: {
    flex:1,
    backgroundColor:'white'
  },
  eyeView:{
padding:5,
    // backgroundColor:'blue',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    flexDirection:'row',
    elevation:1
    
  },
  Image:{
    height:30,
    width:30,
    margin:12,
  },
  Home:{
    fontSize:35,
    fontWeight:'bold',
    margin:8,
    marginLeft:80
  },
  bar:{
   marginHorizontal:20,
    backgroundColor:'red',
    borderRadius:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:15
  },
  image2:{
    height:50,
    width:50,
  },
  Services:{
    fontSize:25,
    fontWeight:'bold',
  },
  image3:{
    marginRight:15
  },
  bar2:{
  flexDirection:'row',
  backgroundColor:'#eee',
  alignItems:'center',
  justifyContent:'space-between',
  marginHorizontal:20,
  borderRadius:20

  },
  img:{
    height:20,
    width:20,
    marginRight:10
  },
  input:{
    width:'80%',
    marginLeft:5
  }




  }
)

export default FlatListScreen