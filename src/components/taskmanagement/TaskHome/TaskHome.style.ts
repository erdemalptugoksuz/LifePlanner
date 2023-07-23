import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 20,
    backgroundColor: colors.justBackground,
  },
  dayTitle: {
    textAlign: 'center',
    color: colors.snow,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  infoTitle: {
    textAlign: 'center',
    color: colors.neutral2,
  },
  taskContainer: {
    backgroundColor: colors.richBlack,
    margin: 20,
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
  },
  taskName: {
    color: colors.snow,
  },
  taskDate: {
    color: colors.neutral2,
    marginTop: 5,
  },
});
