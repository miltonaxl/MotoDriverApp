import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home';
import SignInScreen from '../../screens/home/childs/signInScreen';
const Stack = createNativeStackNavigator();

export default function PublicRoute() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home}></Stack.Screen>
      <Stack.Screen name="login" component={SignInScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
