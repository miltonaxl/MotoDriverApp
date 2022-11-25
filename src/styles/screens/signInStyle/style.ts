import {StyleSheet} from 'react-native';
import base from './../../base';
export default StyleSheet.create({
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: base.background,
    height: '100%',
    flexWrap: 'nowrap',
  },
  container: {
    alignItems: 'center',
    position: 'absolute',
    padding: 20,
    width: '100%',
    bottom: 0,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  logo: {width: '70%', maxWidth: 100, maxHeight: 200, marginTop: 59},
});
