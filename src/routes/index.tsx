import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import PublicRoute from './public';
import Toast from 'react-native-toast-message';
import {AuthContext} from '../Context/AuthContext';
import PrivateRoute from './private';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function Route() {
  const {setloggedUser, isLogged} = React.useContext(AuthContext);

  React.useEffect(() => {
    (async () => {
      try {
        const credentials = await Keychain.getGenericPassword();

        if (credentials) {
          setloggedUser(credentials?.password, credentials.username);
        }
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
      }
    })();
  }, []);
  React.useEffect(() => {}, [isLogged]);
  return (
    <NavigationContainer>
      <Toast />
      {isLogged ? <PrivateRoute /> : <PublicRoute />}
    </NavigationContainer>
  );
}
