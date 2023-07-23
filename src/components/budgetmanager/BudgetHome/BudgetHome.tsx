import React from 'react';
import {View, Text} from 'react-native';

import styles from './BudgetHome.style';

const BudgetHome = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Toplam Para</Text>
      <Text style={styles.count}>{props.budget ? props.budget : '0'} ₺</Text>
    </View>
  );
};

export default BudgetHome;
