import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Map from '../../screens/private/map';
const Stack = createNativeStackNavigator();

export default function PrivateRoute() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="/map" component={Map}></Stack.Screen>
    </Stack.Navigator>
  );
}
