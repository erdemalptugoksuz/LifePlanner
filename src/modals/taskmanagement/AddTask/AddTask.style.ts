import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.richBlack,
  },
  headerContainer: {
    marginHorizontal: 30,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.starCommandBlue,
    textAlign: 'center',
  },
  datePicker: {
    width: 300,
    height: 50,
    backgroundColor: colors.justBackground,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.snow,
  },
});
