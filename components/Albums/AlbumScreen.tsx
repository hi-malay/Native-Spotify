import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    FlatList, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SongListItem from "./../Albums/SongListItem"
import AlbumHeader from "./../Albums/AlbumHeader"

const PlayList = [{
    id: '11',
    name: 'Good vibes',
    by: 'Spotify',
    numberOfLikes: 38,
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
    songs: [{
        id: '1',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'High on You',
        artist: 'Helen',
    }, {
        id: '2',
        imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        title: 'Lorem Ipsum',
        artist: 'Artist 2',
    }, {
        id: '3',
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        title: 'Hello from the other side',
        artist: 'Helen',
    }, {
        id: '4',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'High on You',
        artist: 'Helen',
    }]
}]

const MainScreen = () => {
    const HeaderItem = (item: any) => {
        console.log("abc", item)
        return (
            <View style={styles.container}>
                <Image source={{ uri: "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg" }} style={styles.image} />
                <Text style={styles.name}>Good vibes</Text>
                <View style={styles.creatorContainer}>
                    <Text style={styles.creator}>By Spotify</Text>
                    <Text style={styles.likes}>38 Likes</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>PLAY</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>

            <FlatList
                data={PlayList}
                ListHeaderComponent={HeaderItem}
                renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id}
            //ListHeaderComponent={({ item }) => <AlbumHeader album={item} />}

            />
        </View>

    )
}

export default MainScreen;
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