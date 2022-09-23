import { View, Text, FlatList,StyleSheet } from 'react-native'
import React, {useState} from 'react'

const ListCount = () => {
  const [items, setitems] = useState([
    {name:'Peter',email:"peter@test.com"},
    {name:'Max',email:"max@test.com"},
    {name:'sam',email:"sam@test.com"},
    {name:'Depp',email:"depp@test.com"},
    {name:'jane',email:"jane@test.com"},
    {name:'wyne',email:"wyne@test.com"},
    {name:'bruce',email:"bruce@test.com"},
    {name:'Peter',email:"peter@test.com"},
    {name:'Max',email:"max@test.com"},
    {name:'sam',email:"sam@test.com"},
    {name:'Depp',email:"depp@test.com"},
    {name:'jane',email:"jane@test.com"},
    {name:'wyne',email:"wyne@test.com"},
    {name:'bruce',email:"bruce@test.com"},
])
  return (
    <View style={styles.body}>
      <FlatList 
      data={items}
      renderItem={({item})=>(

        <View>
          <Text style= {{fontSize:25}}> {item.name}</Text>
          <Text style= {{fontSize:25}}>{item.email}</Text>
        </View>
        

      )}
      />
    </View>
  )
}
const styles =StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',
    
  }
})
export default ListCount
