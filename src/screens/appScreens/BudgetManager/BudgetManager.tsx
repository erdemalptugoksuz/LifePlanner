import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import styles from './BudgetManager.style';
import {colors} from '../../../assets';
import {BudgetHome} from '../../../components';
import {AddTransaction, ListTransaction} from '../../../modals';

const BudgetManager = () => {
  const user = auth().currentUser;

  const [transactions, setTransactions] = useState([]);
  const [budget, setBudget] = useState(0);

  const [addTransactionVisible, setAddTransactionVisible] = useState(false);
  const [listTransactionVisible, setListTransactionVisible] = useState(false);

  const handleAddTransactionMovement = () => {
    setAddTransactionVisible(!addTransactionVisible);
  };

  const handleListTransactionMovement = () => {
    setListTransactionVisible(!listTransactionVisible);
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('transactions')
      .onSnapshot(querySnapshot => {
        const transaction: ((prevState: never[]) => never[]) | {key: string}[] =
          [];

        querySnapshot.forEach(documentSnapshot => {
          transaction.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setTransactions(transaction);
      });

    const subscriber2 = firestore()
      .collection('users')
      .doc(user?.uid)
      .onSnapshot(documentSnapshot => {
        setBudget(documentSnapshot.data()?.budget);
      });

    return () => {
      subscriber();
      subscriber2();
    };
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        visible={addTransactionVisible}
        onRequestClose={handleAddTransactionMovement}>
        <AddTransaction closeModal={handleAddTransactionMovement} />
      </Modal>
      <Modal
        animationType="slide"
        visible={listTransactionVisible}
        onRequestClose={handleListTransactionMovement}>
        <ListTransaction
          closeModal={handleListTransactionMovement}
          transactions={transactions}
        />
      </Modal>
      <BudgetHome budget={budget} />
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.addTransactionButton}
          onPress={handleAddTransactionMovement}>
          <Icon name="plus" size={24} color={colors.snow} />
          <Text style={styles.plus}>İşlem Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addTransactionButton}
          onPress={handleListTransactionMovement}>
          <Icon name="list" size={24} color={colors.snow} />
          <Text style={styles.plus}>İşlem Listele</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BudgetManager;
