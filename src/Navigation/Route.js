import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DemoScreen from '../Screens/DemoScreen';
import Details from '../Screens/DetailScreen';
import TestScreen from '../Screens/TestScreen';
import Navigationstrings from './Navigationstrings';

const Stack = createNativeStackNavigator()

const Routes =()=>{
    return(
        <NavigationContainer>
          
            <Stack.Navigator>
                <Stack.Screen name={Navigationstrings.DEMO} component={DemoScreen}/>
                <Stack.Screen name={Navigationstrings.DETAIL} component={Details}/>
                <Stack.Screen name='TestScreen'component={TestScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes