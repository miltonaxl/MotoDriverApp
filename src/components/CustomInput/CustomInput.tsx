import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from '../../styles/components/customInput/style';

const CustomInput = ({
  value,
  setValue,
  placeHolder,
  keyboardType = 'default',
  customStyle,
}: {
  value: string;
  setValue: (event: string) => void;
  placeHolder: string;
  keyboardType?: string;
  customStyle?: {[key: string]: string};
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      <TextInput
        value={value}
        keyboardType={keyboardType}
        onChangeText={setValue}
        placeholder={placeHolder}
        style={styles.input}></TextInput>
    </View>
  );
};

export default CustomInput;
