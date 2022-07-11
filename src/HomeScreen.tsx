import React, { Component } from 'react';
import { TextInput, Button, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import HomeDesignController from './HomeDesignController';

export default class HomeScreen extends HomeDesignController {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewStyle}>

                    <Text variant="displayLarge">"Hello!" {this.state.username}</Text>
                    <Text variant="displayMedium">{this.state.email}</Text>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewStyle: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        // backgroundColor: theme.colors.surface,
    },
})