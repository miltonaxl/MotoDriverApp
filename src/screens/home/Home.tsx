import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import styles from '../../styles/screens/home/style';
import CustomButton from '../../components/CustomButton';
import TextLink from '../../components/textLink';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}: any) => {
  const {height} = useWindowDimensions();

  const onSignUpAccountClientOrDriverOrLogin = (descriptions: {
    [key: string]: string | number | boolean;
  }) => {
    console.log('HERE');
    navigation.navigate('login', descriptions);
  };
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[
            styles.logo,
            {
              height: height * 0.3,
            },
          ]}
          resizeMode="contain"
        />

        <Text style={[styles.title]}>Comencemos a rodar</Text>

        <CustomButton
          title="Entrar como usuario"
          pressButton={() =>
            onSignUpAccountClientOrDriverOrLogin({
              description: 'Entra con tu cuenta y rueda con nostros',
              isUser: true,
              link: JSON.stringify({
                description: '¿Eres conductor?',
                textLink: 'click aquí',
              }),
            })
          }
        />
        <CustomButton
          title="Entrar como conductor"
          typeStyle="TERITARY"
          customStyle={{marginVertical: 3}}
          pressButton={() =>
            onSignUpAccountClientOrDriverOrLogin({
              description: 'Entra con tu cuenta y comienza a rodar',
              isUser: false,
              link: JSON.stringify({
                description: '¿Eres usuario?',
                textLink: 'Click aquí',
              }),
            })
          }
        />

        <TextLink description="Animate a pedir o ser uno de nuestros conductores." />
      </View>
    </SafeAreaView>
  );
};

export default Home;
