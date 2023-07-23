import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
  heading: {
    color: colors.snow,
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
    color: colors.neutral2,
    fontSize: 15,
    fontWeight: '400',
  },
});
