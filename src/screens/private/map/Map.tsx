import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import * as Keychain from 'react-native-keychain';
import {AuthContext} from '../../../Context/AuthContext';
const Map = () => {
  const {logout} = useContext(AuthContext);
  const PressCloseSession = async () => {
    await Keychain.resetGenericPassword();
    logout();
  };

  return (
    <View>
      <Text> MAPA HERE</Text>
      <Button title="Cerrar" onPress={PressCloseSession}></Button>
    </View>
  );
};

export default Map;
