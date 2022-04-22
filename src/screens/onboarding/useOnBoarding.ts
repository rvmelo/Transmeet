import React, {useCallback, useRef, useState} from 'react';
import {ScrollView} from 'react-native';
import {SCREEN_WIDTH} from '../../constants/dimensions';
import {introData} from './container/introData';

//  navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RegisterStackParamList} from '../../routes/types';

interface ReturnType {
  scrollRef: React.MutableRefObject<ScrollView | null | undefined>;
  onScrollForward: () => void;
  onScrollBackward: () => void;
  onNavigation: () => void;
  scrollIndex: number;
  slideAmount: number;
}

type NavigationProps = NativeStackNavigationProp<RegisterStackParamList>;

export function useOnBoarding(): ReturnType {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollRef = useRef<ScrollView | null>();

  const navigation = useNavigation<NavigationProps>();

  const slideAmount = introData.length;

  const onNavigation = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, [navigation]);

  const onScrollForward = useCallback(() => {
    scrollRef?.current?.scrollTo({
      x: SCREEN_WIDTH * (scrollIndex + 1),
      y: 0,
      animated: true,
    });

    if (scrollIndex < slideAmount - 1) {
      setScrollIndex(prev => prev + 1);
    }
  }, [scrollIndex, slideAmount]);

  const onScrollBackward = useCallback(() => {
    scrollRef?.current?.scrollTo({
      x: SCREEN_WIDTH * (scrollIndex - 1),
      y: 0,
      animated: true,
    });

    if (scrollIndex > 0) {
      setScrollIndex(prev => prev - 1);
    }
  }, [scrollIndex]);

  return {
    scrollRef,
    onScrollForward,
    onScrollBackward,
    onNavigation,
    scrollIndex,
    slideAmount,
  };
}
