import React, { Component } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import LoginDesignController from './LoginDesignController';

export default class LoginScreen extends LoginDesignController {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewStyle}>

                    <TextInput
                        label="Email"
                        style= {{marginTop : 10}}
                        value={this.state.username}
                        onChangeText={text => this.setUsername(text)}
                    />

                    <TextInput
                        label="Password"
                        style= {{marginTop : 10}}
                        value={this.state.password}
                        onChangeText={text => this.setUsername(text)}
                    />
                    

                    <Button icon="smile-circle"
                        style= {{marginTop : 10}}
                        mode="contained" 
                        onPress={() => this.props.navigation.navigate("HomeScreen")}>
                        Press me
                    </Button>
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