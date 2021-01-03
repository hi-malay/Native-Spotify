import React, { useContext } from 'react';
import { Text, Image, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

const SongListItem = (props: any) => {
    const { song } = props;
    console.log("fa", props)
    // const { setSongId } = useContext(2);

    const onPlay = () => {
        //   setSongId(song.id);
    }

    return (
        <>
            {song.songs.map((data: any) => <>
                {console.log("data", data.title)}
                <TouchableOpacity onPress={onPlay}>
                    <View style={styles.container}>
                        <Image source={{ uri: data.imageUri }} style={styles.image} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{data.title}</Text>
                            <Text style={styles.artist}>{data.artist}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>)}
        </>

    )
}

export default SongListItem;
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15,
    },
    image: {
        width: 75,
        height: 75,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
    },
    title: {
        color: 'white',
        fontSize: 24,
    },
    artist: {
        color: 'lightgray',
        fontSize: 20,
    }
})


