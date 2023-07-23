import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, Modal, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import styles from './TaskManagement.style';
import {colors} from '../../../assets';
import {TaskHome, TaskStatus, ProfileButton} from '../../../components';
import {AddTask, ListTask} from '../../../modals';

const TaskManagement = () => {
  const user = auth().currentUser;

  const [addTaskVisible, setAddTaskVisible] = useState(false);
  const [listTaskVisible, setListTaskVisible] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('tasks')
      .onSnapshot(querySnapshot => {
        const task = [];

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

        const firstTask = todayTask.sort((a, b) => {
          return a.date.toDate() - b.date.toDate();
        });

        firstTask.length = 1;

        setTodayTasks(firstTask);
      });
    return () => subscriber();
  }, [user]);

  const handleAddTaskMovement = () => {
    setAddTaskVisible(!addTaskVisible);
  };

  const handleListTaskMovement = () => {
    setListTaskVisible(!listTaskVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        visible={listTaskVisible}
        onRequestClose={handleListTaskMovement}>
        <ListTask closeModal={handleListTaskMovement} tasks={tasks} />
      </Modal>
      <Modal
        animationType="slide"
        visible={addTaskVisible}
        onRequestClose={handleAddTaskMovement}>
        <AddTask closeModal={handleAddTaskMovement} />
      </Modal>
      <TaskHome tasks={todayTasks} />
      <ProfileButton
        title="Tüm Görevleri Listele"
        onPress={handleListTaskMovement}
        name="chevron-right"
        color={colors.snow}
        size={17}
      />
      <TaskStatus />
      <View style={styles.addTaskContainer}>
        <TouchableOpacity
          style={styles.addTask}
          onPress={handleAddTaskMovement}>
          <Text style={styles.plus}>Görev Ekle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TaskManagement;
