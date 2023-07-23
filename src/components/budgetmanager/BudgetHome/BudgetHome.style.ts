import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 20,
    backgroundColor: colors.justBackground,
  },
  header: {
    color: colors.snow,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  count: {
    color: colors.snow,
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});
