import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import styles from './TaskStatus.style';
import {colors} from '../../../assets';

const TaskStatus = () => {
  const [ongoing, setOngoing] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const user = auth().currentUser;

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('tasks')
      .onSnapshot(querySnapshot => {
        const tasks = [];
        querySnapshot.forEach(documentSnapshot => {
          tasks.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setOngoing(tasks.filter(task => !task.complete).length);
        setRemaining(tasks.filter(task => task.complete).length);
      });
    return () => subscriber();
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.remainingContainer}>
        <Icon
          style={styles.icon}
          name="rotate-cw"
          color={colors.snow}
          size={46}
        />
        <Text style={styles.title}>Devam Eden</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.countTitle}>{ongoing} Görev</Text>
        </View>
      </View>
      <View style={styles.completedContainer}>
        <Icon style={styles.icon} name="clock" color={colors.snow} size={46} />
        <Text style={styles.title}>Tamamlanan</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.countTitle}>{remaining} Görev</Text>
        </View>
      </View>
    </View>
  );
};

export default TaskStatus;
