import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList, Image, Button } from 'react-native';
import datasource from "./data";
import React from 'react';

export default function Home({navigation}) {
    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}
                              onPress={() => navigation.navigate("Edit", {index: index, type: section.elementType})}
            >
                <View style={styles.parentContainer}>
                    <Text style={styles.textStyle}>{item.name}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.imageRef }} style={styles.imageStyle} />
                </View>
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button title="Add Pokemon" onPress={() => {navigation.navigate("Add")}}/>
        </View>
      <SectionList sections={datasource} renderItem={renderItem}
                   renderSectionHeader={({section:{elementType, bgcolor, color}})=>(
                       <Text style={[styles.headerText, {backgroundColor: bgcolor, color: color}]}>{elementType}</Text>
                   )}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    opacityStyle: {
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: "lightblue",
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: "bold",
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 5,
    },
    imageStyle: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    imageContainer: {
        justifyContent: 'flex-end',
        alignContent: 'center',
        flex: 2,
    },
    parentContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        margin: 10,
        borderWidth: 1,
    },
});
