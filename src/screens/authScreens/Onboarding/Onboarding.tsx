import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  Animated,
  Text,
  TouchableOpacity,
  ViewToken,
} from 'react-native';

import styles from './Onboarding.style';
import {slides} from '../../../assets';
import {OnboardingItem, Paginator} from '../../../components';

const Onboarding = ({navigation}: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scroolX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      const index = viewableItems[0]?.index ?? 0;
      setCurrentIndex(index);
    },
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const handleNext = (): void => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('SignUpScreen');
    }
  };

  const handleSkip = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <FlatList
          data={slides}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scroolX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View style={styles.paginatorContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipTitle}>Geç</Text>
        </TouchableOpacity>
        <Paginator data={slides} scrollX={scroolX} />
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.nextTitle}>İlerle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
