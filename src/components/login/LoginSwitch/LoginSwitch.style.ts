import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  title: {
    color: colors.snow,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
