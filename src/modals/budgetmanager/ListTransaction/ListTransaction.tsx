import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import styles from './ListTransaction.style';
import {colors} from '../../../assets';
import {Transaction} from '../../../components';

const ListTransaction = (props: any) => {
  const user = auth().currentUser;

  const deleteTransaction = (key: string, category: string, amount: number) => {
    Alert.alert(
      'İşlemi Sil',
      'Bu işlemi silmek istediğinize emin misiniz?',
      [
        {
          text: 'İptal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Sil',
          style: 'destructive',
          onPress: () => {
            firestore()
              .collection('users')
              .doc(user?.uid)
              .collection('transactions')
              .doc(key)
              .delete()
              .then(() => {
                firestore()
                  .collection('users')
                  .doc(user?.uid)
                  .update({
                    budget:
                      category === 'Gelir'
                        ? firestore.FieldValue.increment(-Number(amount))
                        : firestore.FieldValue.increment(Number(amount)),
                  });
              });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={props.closeModal}>
          <Icon name="arrow-left" size={24} color={colors.snow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>İşlem Listele</Text>
      </View>
      <FlatList
        data={props.transactions.sort(
          (a: {date: number}, b: {date: number}) => a.date - b.date,
        )}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Transaction
            name={item.name}
            date={item.date.toDate().toLocaleString().slice(0, -3)}
            amount={item.amount}
            category={item.category}
            deleteTransaction={() =>
              deleteTransaction(item.key, item.category, item.amount)
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ListTransaction;
