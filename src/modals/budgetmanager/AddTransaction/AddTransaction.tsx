import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-date-picker';
import {SelectList} from 'react-native-dropdown-select-list';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import styles from './AddTransaction.style';
import {colors} from '../../../assets';
import {InputField, DateInput, DarkButton} from '../../../components';

const AddTransaction = (props: any) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [category, setCategory] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const categories = [
    {label: 'income', value: 'Gelir'},
    {label: 'expense', value: 'Gider'},
  ];

  const addTransaction = async () => {
    if (
      amount === 0 ||
      amount <= 0 ||
      name === '' ||
      category === '' ||
      date === undefined
    ) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz.');
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      Alert.alert('Hata', 'Geçersiz tutar.');
      return;
    }

    const user = auth().currentUser;
    const transaction = {
      name: name,
      amount: amount,
      date: date,
      category: category,
    };
    await firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('transactions')
      .add(transaction);

    const userDocRef = firestore().collection('users').doc(user?.uid);

    const userSnapshot = await userDocRef.get();
    if (userSnapshot.exists) {
      await userDocRef.update({
        budget: firestore.FieldValue.increment(
          category === 'Gider' ? -parsedAmount : parsedAmount,
        ),
      });
    } else {
      await userDocRef.set({
        budget: category === 'Gider' ? -parsedAmount : parsedAmount,
      });
    }

    props.closeModal();
    setName('');
    setAmount(0);
    setDate(undefined);
    setCategory('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={props.closeModal}>
          <Icon name="arrow-left" size={24} color={colors.snow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>İşlem Ekle</Text>
      </View>
      <InputField
        title="Marka"
        placeholder="Bülent Börekcilik"
        keyboardType="default"
        onChangeText={setName}
      />
      <InputField
        title="Tutar"
        placeholder="100"
        keyboardType="numeric"
        onChangeText={setAmount}
      />
      <SelectList
        placeholder="Kategori Seçiniz"
        search={false}
        boxStyles={styles.list}
        dropdownStyles={styles.list}
        inputStyles={styles.inputStyles}
        dropdownTextStyles={styles.listItem}
        arrowicon={<Icon name="chevron-down" size={22} color={colors.snow} />}
        searchicon={<Icon name="search" size={12} color={'black'} />}
        setSelected={setCategory}
        data={categories}
        save="value"
      />
      <DateInput
        taskDate={date}
        setTaskDate={setDate}
        setDatePickerVisible={setDatePickerVisible}
      />
      <DatePicker
        modal
        locale="tr"
        open={datePickerVisible}
        mode="datetime"
        date={date === undefined ? new Date() : date}
        onConfirm={dates => {
          setDate(dates);
          setDatePickerVisible(false);
        }}
        onCancel={() => setDatePickerVisible(false)}
        maximumDate={new Date()}
      />
      <DarkButton
        title="İşlem Ekle"
        onPress={addTransaction}
        loading={undefined}
      />
    </SafeAreaView>
  );
};

export default AddTransaction;
