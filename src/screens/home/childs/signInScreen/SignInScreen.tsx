import {
  View,
  Image,
  useWindowDimensions,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';

import Logo from '../../../../../assets/images/logo.png';
import styles from '../../../../styles/screens/signInStyle/style';
import CustomInput from '../../../../components/CustomInput';
import CustomButton from '../../../../components/CustomButton';
import TextLink from '../../../../components/textLink';
import {loginOrRegister} from '../../../../services/login.service';
import {AuthContext} from '../../../../Context/AuthContext';

const SignInScreen = ({navigation, route, setLogged}: any) => {
  const {height} = useWindowDimensions();

  const params = route?.params;

  const textLinkButton: any = JSON.parse(params?.link);

  const [getParams, setParams] = useState(params);
  const [getLinkButtom, setLinkButtom] = useState(textLinkButton);

  const [getParamsOld, setParamsOld] = useState();
  const [getLinkButtomOld, setLinkButtomOld] = useState();

  const [getInputPlacerholder, setInputPlacerholder] = useState(
    'Ingresa tu número de telefono',
  );
  const [showTextLink, setShowTextLink] = useState(true);
  const [getInputText, setInputText] = useState('');
  const [numberPhone, setNumberPhone] = useState('');

  const [counter, setCounter] = useState(60);
  const [showCounter, setShowCounter] = useState(true);

  const [confirmCodeBoo, setConfirmCode] = useState(false);

  const {setIsLoading, isLoading, confirmToken} = useContext(AuthContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => {
        if (counter <= 1) {
          setShowCounter(false);
          setCounter(59);
          clearInterval(interval);
        }
        return counter - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [showCounter]);

  const goToBack = () => {
    setConfirmCode(false);
    setParams(getParamsOld);
    setShowTextLink(true);
    setLinkButtom(getLinkButtomOld);
    setInputPlacerholder('Ingresa tu número de telefono');
    setInputText('');
  };

  const pressSignIn = async () => {
    setIsLoading(true);
    const response = await loginOrRegister({
      isDriver: !getParams.isUser,
      phone: getInputText,
    });
    setIsLoading(false);
    setNumberPhone(getInputText);

    if (response.status === 200) {
      setInputText('');
      setConfirmCode(true);
      setShowTextLink(false);
      setCounter(60);
      setParamsOld(getParams);
      setLinkButtomOld(getLinkButtom);
      setShowCounter(true);
      setParams({
        description: 'Inserte el código del mensaje.',
        buttomName: 'Confirmar código.',
      });
      setInputPlacerholder('Ingrese código de confirmación.');

      Toast.show({
        type: 'success',
        // text1: 'Su código fue reenviado',
        text1: 'Su código fue enviado.',

        position: 'bottom',

        autoHide: true,
        visibilityTime: 4000,
      });
    } else {
      Toast.show({
        type: 'error',
        // text1: 'Su código fue reenviado',
        text1: 'Login Error',
        text2: response?.data?.message,

        position: 'bottom',

        autoHide: true,
        visibilityTime: 4000,
      });
    }
  };
  const DontHaveAccount = (isUser: boolean) => {
    setConfirmCode(false);
    if (isUser) {
      setParams({
        description: 'Entra con tu cuenta y rueda con nostros',
        isUser: false,
      });

      setLinkButtom({
        description: '¿Eres conductor?',
        textLink: 'click aquí',
      });
      return;
    }
    setParams({
      description: 'Entra con tu cuenta y comienza a rodar',
      isUser: true,
    });

    setLinkButtom({
      description: '¿Eres usuario?',
      textLink: 'Click aquí',
    });
  };
  const resendCode = () => {
    setShowCounter(true);

    setCounter(60);
    Toast.show({
      type: 'success',
      // text1: 'Su código fue reenviado',
      text2: 'Su código fue reenviado',

      position: 'bottom',

      autoHide: true,
      visibilityTime: 4000,
    });
  };

  const confirmCode = async () => {
    setIsLoading(true);
    setInputText('');
    const response = await confirmToken(numberPhone, getInputText);
    if (response.status === 200) {
      setNumberPhone('');
      setIsLoading(false);

      Toast.show({
        type: 'success',
        // text1: 'Su código fue reenviado',
        text1: 'Login Sucess.',
        text2: response.data,

        position: 'bottom',

        autoHide: true,
        visibilityTime: 4000,
      });
      navigation.navigate('/map');
      return;
    } else {
      setIsLoading(false);
      Toast.show({
        type: 'error',
        // text1: 'Su código fue reenviado',
        text1: 'Login Error',
        text2: response?.data?.message,

        position: 'bottom',

        autoHide: true,
        visibilityTime: 4000,
      });
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Spinner
        visible={isLoading}
        textContent={'Cargando...'}
        textStyle={styles.spinnerTextStyle}
      />
      <Toast />
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <TextLink description={getParams.description} />
        <CustomInput
          placeHolder={getInputPlacerholder}
          keyboardType={'number-pad'}
          value={getInputText}
          setValue={(event: string) => {
            if (
              !showTextLink &&
              getInputText.length === 4 &&
              getInputText.length < event.length
            ) {
              return;
            }

            setInputText(
              getInputText.length < 1 && showTextLink ? `+${event}` : event,
            );
          }}
        />
        <CustomButton
          title={confirmCodeBoo ? 'Confirmar código.' : 'Entrar'}
          pressButton={confirmCodeBoo ? confirmCode : pressSignIn}
        />

        {showTextLink ? (
          <TextLink
            description={getLinkButtom.description}
            textLink={getLinkButtom.textLink}
            navigateFunc={() => DontHaveAccount(getParams.isUser)}
          />
        ) : (
          <>
            <CustomButton
              title={
                showCounter ? `reenviar código ${counter}` : 'reenviar código'
              }
              typeStyle={'TERITARY'}
              pressButton={
                showCounter
                  ? () => {
                      Toast.show({
                        type: 'error',
                        // text1: 'Su código fue reenviado',
                        text1: 'Tenga paciencia.',

                        text2:
                          'Podrá re-enviar otro mensaje cuando finalice el tiempo.',

                        position: 'bottom',

                        autoHide: true,
                        visibilityTime: 4000,
                      });
                    }
                  : resendCode
              }
            />
            <TextLink textLink={'Ir atrás'} navigateFunc={goToBack} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
