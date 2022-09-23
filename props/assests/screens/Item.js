import { View, Text,Image } from 'react-native'
import React from 'react'

const Itemstyle=(props)=>(
    <View>
<Text style={{fontSize:50,fontWeight:'bold'}}>{props.item.txt}</Text>
<Text style={{fontSize:30,marginTop:30,fontWeight:'bold'}}>{props.item.title}</Text>
<Text style={{fontSize:30,marginTop:30}}>{props.item.Number}</Text>
<Image style={{height:150,width:150,}} source={props.item.img}/>
    </View>
)

export default Itemstyle;
