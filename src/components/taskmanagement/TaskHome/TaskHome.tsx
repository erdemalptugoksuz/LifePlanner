import React from 'react';
import {View, Text, FlatList} from 'react-native';

import styles from './TaskHome.style';

const TaskContainer = (props: any) => {
  if (!props.task) {
    return (
      <View style={styles.taskContainer}>
        <Text style={styles.taskName}>Yaşasın, bugün görev yok!</Text>
      </View>
    );
  }

  const date = new Date(props.task.date.toDate()).toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{props.task.name}</Text>
      <Text style={styles.taskDate}>{date}</Text>
    </View>
  );
};

const TaskHome = (props: any) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    weekday: 'long',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.dayTitle}>{formattedDate}</Text>
      <FlatList
        data={props.tasks}
        renderItem={({item}) => <TaskContainer task={item} />}
        keyExtractor={item => item?.key || ''}
      />
    </View>
  );
};

export default TaskHome;
