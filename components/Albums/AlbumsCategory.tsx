import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AlbumComponent from "../Albums/AlbumData";

const AlbumCategory = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <FlatList
            data={props.albums}
            renderItem={({ item }) => <AlbumComponent album={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    </View>
)

export default AlbumCategory;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
    }
});

