import {StyleSheet} from 'react-native';
import base from './../../base';

export default StyleSheet.create({
  root: {marginVertical: 15, alignItems: 'center'},
  texto: {
    fontSize: base.text.size.xxs,
    fontFamily: base.text.fontFamily,
  },
  functionContainer: {
    alignContent: 'center',
  },

  textButton: {
    fontSize: base.text.size.xxs,
    textAlign: 'center',
    fontWeight: base.text.weight.bold,
    color: base.text.colors.blue,
  },
});
