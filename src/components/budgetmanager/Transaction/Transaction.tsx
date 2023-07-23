import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Transaction.style';

const Transaction = (props: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.deleteTransaction}>
      <View>
        <Text style={styles.transactionName}>{props.name}</Text>
        <Text style={styles.transactionDate}>{props.date}</Text>
      </View>
      {props.category === 'Gelir' ? (
        <Text style={styles.transactionAmountIncome}>+{props.amount} ₺</Text>
      ) : (
        <Text style={styles.transactionAmountExpense}>-{props.amount} ₺</Text>
      )}
    </TouchableOpacity>
  );
};

export default Transaction;
