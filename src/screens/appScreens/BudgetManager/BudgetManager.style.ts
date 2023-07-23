import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.richBlack,
  },
  addTransactionButton: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: colors.justBackground,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  plus: {
    color: colors.snow,
    fontWeight: 'bold',
    marginTop: 5,
  },
  modalContainer: {
    flexDirection: 'row',
    margin: 20,
  },
});
