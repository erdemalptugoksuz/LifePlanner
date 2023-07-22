import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';

import styles from './OnboardingItem.style';

const OnboardingItem = ({item}: {item: any}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
