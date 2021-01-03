import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AlbumComponent = (props) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('AlbumScreen', { id: props.album.id })
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.image} />
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default AlbumComponent;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 155,
        margin: 10,
    },
    image: {
        width: '100%',
        height: 155,
    },
    text: {
        color: 'grey',
        marginTop: 10,
    }
})

