import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.justBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.snow,
    marginHorizontal: 20,
  },
  icon: {
    marginHorizontal: 20,
  },
});
