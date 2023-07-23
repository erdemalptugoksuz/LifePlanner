import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010E14',
  },
  bodyContainer: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 50,
  },
  forgotPassword: {
    color: colors.snow,
    marginLeft: 30,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});
