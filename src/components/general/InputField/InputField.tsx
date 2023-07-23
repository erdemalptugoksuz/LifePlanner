import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './InputField.style';
import {colors} from '../../../assets';

const InputField = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={colors.neutral2}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

export default InputField;
