import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: colors.justBackground,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {},
  title: {
    color: colors.snow,
    fontWeight: '500',
    textAlign: 'center',
  },
});
