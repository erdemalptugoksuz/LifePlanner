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
  list: {
    flex: 1,
    marginTop: 20,
  },
});
