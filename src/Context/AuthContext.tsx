import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import * as Keychain from 'react-native-keychain';

import {validateInUserODriver} from '../services/login.service';
export const AuthContext = createContext({
  isLoading: false,
  setIsLoading: (value: Boolean): any => {},
  confirmToken: async (phone: string, code: string): Promise<any> => {},
  setloggedUser: (token: string, phone: string): any => {},
  loggedUser: {token: '', phone: ''} || undefined,
  isLogged: false,
  logout: (): any => {},
});

export const AuthProvider = ({children}: any) => {
  const [isLoading, setIsLoading] = useState<any>(false);
  const [isLogged, setIsLogged] = useState<any>(false);

  const [loggedUser, setloggedUser] = React.useState<{
    token: string;
    phone: string;
  }>({token: '', phone: ''});
  const confirmToken = async (
    phone: string,
    code: string,
  ): Promise<{status: number} | any> => {
    const response = await validateInUserODriver({
      phone,
      verificationCode: code,
    });

    if (response.status !== 200) {
      return {data: {message: 'Error in App'}, status: 500};
    }

    await Keychain.setGenericPassword(phone, response.data.result);
    setIsLogged(true);

    setloggedUser({
      phone,
      token: response.data.result,
    });
    return response;
  };
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        loggedUser,
        setIsLoading: (value: Boolean): any => setIsLoading(value),
        confirmToken,
        setloggedUser: (token: string, phone: string) => {
          setIsLogged(true);

          setloggedUser({
            token,
            phone,
          });
        },
        isLogged,

        logout: () => setIsLogged(false),
      }}>
      {children}
    </AuthContext.Provider>
  );
};
