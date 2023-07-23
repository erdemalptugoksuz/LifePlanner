import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './DateInput.style';

const DateInput = (props: any) => {
  return (
    <TouchableOpacity
      style={styles.datePicker}
      onPress={() => props.setDatePickerVisible(true)}>
      <Text style={styles.datePickerText}>
        {props.taskDate === undefined
          ? 'Tarih Seçiniz'
          : props.taskDate.toLocaleDateString() +
            ' ' +
            props.taskDate.toLocaleTimeString().slice(0, 5)}
      </Text>
    </TouchableOpacity>
  );
};

export default DateInput;
