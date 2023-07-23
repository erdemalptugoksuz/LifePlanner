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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import styles from './ListTask.style';
import {colors} from '../../../assets';
import {Task} from '../../../components';

const ListTask = (props: any) => {
  const user = auth().currentUser;

  const completeTask = async (id: string, complete: boolean) => {
    await firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('tasks')
      .doc(id)
      .update({
        complete: !complete,
      });
  };

  const deleteTask = async (id: string) => {
    Alert.alert(
      'Görevi Sil',
      'Bu görevi silmek istediğinize emin misiniz?',
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
              .collection('tasks')
              .doc(id)
              .delete();
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
        <Text style={styles.headerTitle}>Görevler</Text>
      </View>
      <FlatList
        data={props.tasks.sort(
          (a: {date: number}, b: {date: number}) => a.date - b.date,
        )}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <Task
            name={item.name}
            description={item.description}
            date={item.date.toDate().toLocaleString().slice(0, -3)}
            complete={item.complete}
            completeTask={() => completeTask(item.key, item.complete)}
            onPress={() => deleteTask(item.key)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ListTask;
