import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Contact = ({ data }) => {
    const { name, phone, image } = data
    return (
        <View style={styles.contactContainer}>
            <View style={styles.contactImage}>
                {image ?
                    <Image style={styles.contactImage} source={{ uri: image }} />
                    :
                    <Text>{name.substring(0, 1)}</Text>
                }
            </View>
            <View>
                <Text>{name}</Text>
                <Text>{phone}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contactContainer:
    {
        backgroundColor: "#ddd",
        margin: 5,
        borderRadius: 5,
        padding: 10,
        flexDirection: "row"
    },
    contactImage: {
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        height: 40,
        width: 40,
        borderRadius: 150 / 2,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    }
})

export default Contact
