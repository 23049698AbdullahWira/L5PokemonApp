import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./home";
import Add from "./add";
import Edit from "./edit";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Add" component={Add}/>
                <Stack.Screen name='Edit' component={Edit}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
