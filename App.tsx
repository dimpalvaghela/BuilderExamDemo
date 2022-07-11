import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListComponent from './src/ListComponent';
import FlatListTwo from './src/FlatListTwo';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/HomeScreen';
import SignUpScreen from './src/SignUpScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="FlatListTwo" component={FlatListTwo} />
        <Stack.Screen name="ListComponent" component={ListComponent} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;