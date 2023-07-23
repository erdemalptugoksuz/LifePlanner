import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './AppButton.style';

const AppButton = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Icon
        style={styles.icon}
        name={props.name}
        color={props.color}
        size={props.size}
      />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
