import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './ProfileButton.style';

const ProfileButton = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
      <Icon
        style={styles.icon}
        name={props.name}
        color={props.color}
        size={props.size}
      />
    </TouchableOpacity>
  );
};

export default ProfileButton;
