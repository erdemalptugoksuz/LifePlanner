import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Input.style';

const Input = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputName}>{props.inputName}</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={props.textEntry}
      />
    </View>
  );
};

export default Input;
