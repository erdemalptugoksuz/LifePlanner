import {StyleSheet, Platform} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginBottom: 20,
    paddingHorizontal: Platform.OS === 'android' ? 0 : 20,
    paddingVertical: Platform.OS === 'android' ? 0 : 10,
    borderWidth: 1,
    borderColor: colors.neutral2,
    borderRadius: 10,
  },
  inputName: {
    color: colors.neutral2,
    fontSize: 12,
  },
  inputField: {
    color: colors.snow,
    marginVertical: 5,
  },
});
