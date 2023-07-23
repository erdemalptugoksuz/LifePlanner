import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.snow,
  },
  inputField: {
    fontSize: 16,
    color: colors.snow,
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: colors.justBackground,
  },
});
