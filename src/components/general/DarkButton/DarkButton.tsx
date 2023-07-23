import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import styles from './DarkButton.style';
import {colors} from '../../../assets';

const DarkButton = (props: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      disabled={props.loading}>
      {props.loading ? (
        <ActivityIndicator color={colors.snow} />
      ) : (
        <Text style={styles.title}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default DarkButton;
