import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  datePicker: {
    marginHorizontal: 30,
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.justBackground,
  },
  datePickerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.snow,
  },
});
