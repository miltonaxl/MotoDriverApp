import base from '../../base';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  PRIMARY_CONTAINER: {
    backgroundColor: '#6F61E7',
    borderColor: '#e8e8e8',
    borderWidth: 2,
  },
  TERITARY_CONTAINER: {
    backgroundColor: '#DEDDE7',
    borderColor: '#E7E4E4',
    borderWidth: 2,
  },

  PRIMARY_TEXT: {
    color: 'white',
  },

  TERITARY_TEXT: {
    // color: 'black',
  },

  container: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    fontSize: base.text.size.xxs,
    fontFamily: base.text.fontFamily,
    fontWeight: base.text.weight.bold,
    textAlign: 'center',
  },
});
