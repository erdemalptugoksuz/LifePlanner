import React from 'react';
import {View, Animated, useWindowDimensions} from 'react-native';

import styles from './Paginator.style';

interface PaginatorProps {
  data: any[];
  scrollX: Animated.Value;
}

const Paginator = ({data, scrollX}: PaginatorProps) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          // Alttakini yorum satırına alırsan daha farklı bir animasyona sahip olursun.
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          // Bunu da alman gerek.
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
