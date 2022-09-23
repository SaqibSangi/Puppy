import { View, Text,TextInput } from 'react-native'
import React,{useState} from 'react'

export default function SetNameAge() {
    const [name,setname] = useState('')
    const [age,setage] =useState()

  return (
    <View style={{flex:1,justifyContent:"center"}}>
<View>
    <TextInput
    style={{borderWidth:1,marginHorizontal:10}}
    placeholder='Enter Name'
onChangeText={(val)=>setname(val)}
    />
    <TextInput
    style ={{borderWidth:1,marginVertical:20,marginHorizontal:10}}
    placeholder='Enter Age'
    onChangeText={(val)=>setage(val)}/>

</View>
<View style ={{marginLeft:15}}>
<Text>Name:{name}</Text>
<Text>Age:{age}</Text>
</View>



    </View>
  )
}