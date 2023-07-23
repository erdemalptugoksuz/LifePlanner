import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './Task.style';
import {colors} from '../../../assets';

const Task = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View>
        <Text style={styles.taskTitle}>{props.name}</Text>
        <Text style={styles.taskDesc}>{props.description}</Text>
        <Text style={styles.taskDate}>{props.date}</Text>
      </View>
      <TouchableOpacity onPress={props.completeTask}>
        <Icon
          name={props.complete ? 'check-square' : 'square'}
          size={24}
          color={props.complete ? colors.neutralGreen : colors.snow}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Task;
