import React, { Component } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import SignUpController from './SignUpController';

export default class SignUpScreen extends SignUpController {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewStyle}>

                <TextInput
                        label="UserName"
                        style= {{marginTop : 10}}
                        value={this.state.username}
                        onChangeText={textUserName => this.setUsername(textUserName)}
                    />

                    <TextInput
                        label="Email"
                        style= {{marginTop : 10}}
                        value={this.state.email}
                        onChangeText={textEMail => this.setEmail(textEMail)}
                    />

                    <TextInput
                        label="Password"
                        style= {{marginTop : 10}}
                        value={this.state.password}
                        onChangeText={textPassword => this.setPassword(textPassword)}
                    />

                    <Button icon="smile-circle"
                        style= {{marginTop : 10}}
                        mode="contained" 
                        onPress={() => this.openLoginPage(this.state.username,this.state.email)}>
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