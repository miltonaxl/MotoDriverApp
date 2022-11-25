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
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    padding: 20,

    bottom: 3,
  },
  logo: {
    width: '70%',
    maxWidth: 100,
    maxHeight: 200,
    //marginTop: 59
  },
  title: {
    fontWeight: base.text.weight.bold,
    fontSize: base.text.size.xs,
    fontFamily: base.text.fontFamily,
    margin: base.text.margin.small,
    textAlign: 'center',
    color: base.text.colors.black,
  },
});
