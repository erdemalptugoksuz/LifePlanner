import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './AppsPage.style';
import {colors} from '../../../assets';
import {AppButton} from '../../../components';

const AppsPage = ({navigation}: any) => {
  const handleTaskManagementMovement = () => {
    navigation.navigate('TaskManagementScreen');
  };

  const handleBudgetManagerMovement = () => {
    navigation.navigate('BudgetManagerScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppButton
        onPress={handleBudgetManagerMovement}
        title="Bütçe Yöneticisi"
        name="credit-card"
        color={colors.snow}
        size={30}
      />
      <AppButton
        onPress={handleTaskManagementMovement}
        title="Yapılacaklar Listesi"
        name="clipboard"
        color={colors.snow}
        size={30}
      />
    </SafeAreaView>
  );
};

export default AppsPage;
