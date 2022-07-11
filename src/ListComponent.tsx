import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import DetailsController from './DetailsController';

export default class ListComponent extends DetailsController {

    render() {
        return (
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle1}> NAme: <Text style={styles.textStyle2}>{this.state.item.first_name} "   " {this.state.item.last_name}</Text></Text>
                    <Text style={styles.textStyle1}> Email: <Text style={styles.textStyle2}>{this.state.item.email}</Text></Text>
                     <Image style={{ width: 50, height: 50 }} source={{ uri: this.state.item.avatar }}></Image>
                </View>
        )
    }
}

const styles = StyleSheet.create({

    viewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D3D3D3'
    },
    separator: {
        height: 20
    },
    rowStyle: {
        margin: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        roundedCorners: 10
    },
    textStyle1: {
        fontSize: 20,
        fontWeight: 'bold',
        fontColor: 'black'

    },
    textStyle2: {
        fontSize: 18,
        fontWeight: 'bold',
        fontColor: 'black'

    },
    textStyle3: {
        fontSize: 18,
        fontWeight: 'bold',
        fontColor: 'blue'

    },
    indicatorStyle: {
        width: 40,
        height: 40,
        color: "black"
    }

})