import React from 'react';
import {View, Text} from 'react-native';

import styles from './LoginSwitch.style';

const LoginSwitch = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={props.onPress}>
        {props.title}
      </Text>
    </View>
  );
};

export default LoginSwitch;
