import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: colors.justBackground,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.snow,
  },
  transactionDate: {
    fontSize: 12,
    color: colors.neutral2,
    marginTop: 5,
  },
  transactionAmountIncome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.neutralGreen,
  },
  transactionAmountExpense: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.neutralRed,
  },
});
