import {View, Text, Pressable} from 'react-native';
import React from 'react';
import stylesx from '../../styles/components/customButton/style';

const CustomButton = ({
  title,
  typeStyle = 'PRIMARY',
  pressButton,
  customStyle,
}: {
  title: string;
  typeStyle?: 'PRIMARY' | 'TERITARY';
  pressButton: any;
  customStyle?: {[key: string]: string | number};
}) => {
  return (
    <Pressable
      onPress={pressButton}
      style={[
        stylesx.container,
        stylesx[`${typeStyle}_CONTAINER`],
        customStyle,
      ]}>
      <Text style={[stylesx.button, stylesx[`${typeStyle}_TEXT`]]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
