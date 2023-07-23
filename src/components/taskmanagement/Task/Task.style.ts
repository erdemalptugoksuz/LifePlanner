import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.justBackground,
    marginTop: 20,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.snow,
  },
  taskDesc: {
    color: colors.neutral2,
    marginTop: 5,
  },
  taskDate: {
    color: colors.neutral2,
    marginTop: 5,
  },
  taskDateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
