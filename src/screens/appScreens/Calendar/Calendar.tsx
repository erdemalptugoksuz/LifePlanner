import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import styles from './Calendar.style';

const Calendar = () => {
  const user = auth().currentUser;

  const [tasks, setTasks] = useState([]);
  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('tasks')
      .onSnapshot(querySnapshot => {
        const task: ((prevState: never[]) => never[]) | {key: string}[] = [];

        querySnapshot.forEach(documentSnapshot => {
          task.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setTasks(task);

        const todayTask = task.filter(
          item =>
            item.date.toDate().toLocaleDateString() ===
              new Date().toLocaleDateString() && item.complete === false,
        );

        setTodayTasks(todayTask);
      });

    return () => subscriber();
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Günün Görevleri</Text>
        <View style={styles.items}>
          {todayTasks.map((item, index) => {
            return (
              <View key={index} style={styles.item}>
                <View style={styles.itemLeft}>
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Text style={styles.itemDate}>
                    {item.date.toDate().toLocaleTimeString().slice(0, 5)}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calendar;
