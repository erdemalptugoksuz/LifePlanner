import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.snow,
    marginTop: 40,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.neutral2,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
  },
});
