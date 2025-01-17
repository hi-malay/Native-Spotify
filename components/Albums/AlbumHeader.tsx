import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const AlbumHeader = (props: any) => {
    console.log("HII", props)
    return (
        <View style={styles.container}>
            <Text>Hii</Text>
            {/* <Image source={{ uri: album.imageUri }} style={styles.image} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

export default AlbumHeader;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    creatorContainer: {
        flexDirection: "row",
        margin: 10
    },
    creator: {
        color: 'lightgray',
        margin: 5,
        fontSize: 20,
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 20,
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 60,
        width: 175,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
});