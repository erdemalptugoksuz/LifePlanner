import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.justBackground,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
  },
  title: {
    color: colors.snow,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
