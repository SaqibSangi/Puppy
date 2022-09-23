import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Contact from './Component/Contact'


const App = () => {

    const [refreshing, updateRefreshing] = useState(false)
    const [counter, updateCounter] = useState(0)
    const [contacts, updateContacts] = useState([
        { "name": "waqar", "phone": 7675, image: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" },
        { "name": "waqar", "phone": 7675 },
        { "name": "waqar", "phone": 7675 },
        { "name": "waqar", "phone": 7675 },
        { "name": "umair", "phone": 8767 },
        { "name": "waqar", "phone": 8767 },
        { "name": "waqar", "phone": 8767 },
        { "name": "waqar", "phone": 8767 },
        { "name": "waqar", "phone": 8767 },
        { "name": "waqar", "phone": 8767 },
        { "name": "waqar", "phone": 8767 },
        { "name": "waqar", "phone": 8767 },
        { "name": "waqar", "phone": 8767 }])

    return (
        <View style={{ flex: 1 }}>
            <Text>{counter}</Text>
            <TouchableOpacity onPress={() => {
                updateCounter(counter + 1)
            }}><Text>Click Me {JSON.stringify(refreshing)}</Text></TouchableOpacity>
            <FlatList refreshing={refreshing} onRefresh={() => {
                updateRefreshing(true)
                updateContacts([])
                updateRefreshing(false)
            }}
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>No contacts found</Text></View>}
                keyExtractor={({ item, index }) => JSON.stringify(index)}
                data={contacts} renderItem={({ item, index }) => <Contact key={index} data={item} />} />
        </View>
    )

}

export default App