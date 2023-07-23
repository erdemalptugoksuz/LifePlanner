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
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: colors.justBackground,
    borderWidth: 0,
    alignItems: 'center',
  },
  inputStyles: {
    color: colors.snow,
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  listItem: {
    color: colors.snow,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
