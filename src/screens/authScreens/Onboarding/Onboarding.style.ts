import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.richBlack,
  },
  bodyContainer: {
    flex: 3,
  },
  paginatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  skipTitle: {
    color: colors.neutral2,
  },
  nextTitle: {
    color: colors.snow,
  },
});
