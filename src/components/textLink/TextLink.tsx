import {Text, View, Pressable} from 'react-native';
import React from 'react';
import styles from '../../styles/components/textLink/style';

const TextLink = ({
  description,
  textLink,
  navigateFunc,
}: {
  description?: string;
  textLink?: string;
  navigateFunc?: () => void;
  customStyle?: {[key: string]: string};
}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.texto}>{description} </Text>
      <Pressable style={styles.functionContainer} onPress={navigateFunc}>
        <Text style={styles.textButton}>{textLink}</Text>
      </Pressable>
    </View>
  );
};

export default TextLink;
