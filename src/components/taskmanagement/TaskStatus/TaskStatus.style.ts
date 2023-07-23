import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 30,
  },
  remainingContainer: {
    flex: 1,
    backgroundColor: colors.justBackground,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
  },
  completedContainer: {
    flex: 1,
    backgroundColor: colors.neutral2,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: colors.snow,
    fontWeight: 'bold',
  },
  icon: {
    marginVertical: 20,
  },
  innerContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countTitle: {
    color: colors.snow,
  },
});
