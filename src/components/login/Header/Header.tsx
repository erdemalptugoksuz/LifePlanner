import React from 'react';
import {View, Text} from 'react-native';

import styles from './Header.style';

const Header = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

export default Header;
