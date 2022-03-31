import React, {useCallback, useRef, useState} from 'react';
import {ScrollView} from 'react-native';
import {SCREEN_WIDTH} from '../../constants/dimensions';

interface ReturnType {
  scrollRef: React.MutableRefObject<ScrollView | null | undefined>;
  onScrollForward: () => void;
  onScrollBackward: () => void;
  onNavigation: () => void;
  scrollIndex: number;
}

export function useOnBoarding(): ReturnType {
  const [scrollMultiplyFactor, setScrollMultiplyFactor] = useState(1);
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollRef = useRef<ScrollView | null>();

  const onNavigation = useCallback(() => {
    // navigate to home screen
  }, []);

  const onScrollForward = useCallback(() => {
    scrollRef?.current?.scrollTo({
      x: SCREEN_WIDTH * scrollMultiplyFactor,
      y: 0,
      animated: true,
    });

    if (scrollIndex < 2) {
      setScrollIndex(prev => prev + 1);
    }

    if (scrollMultiplyFactor >= 2) {
      return;
    }

    setScrollMultiplyFactor(prev => prev + 1);
  }, [scrollMultiplyFactor, scrollIndex]);

  const onScrollBackward = useCallback(() => {
    scrollRef?.current?.scrollTo({
      x: SCREEN_WIDTH * (scrollMultiplyFactor - 1),
      y: 0,
      animated: true,
    });

    if (scrollIndex > 0) {
      setScrollIndex(prev => prev - 1);
    }

    if (scrollMultiplyFactor <= 1) {
      return;
    }

    setScrollMultiplyFactor(prev => prev - 1);
  }, [scrollMultiplyFactor, scrollIndex]);

  return {
    scrollRef,
    onScrollForward,
    onScrollBackward,
    onNavigation,
    scrollIndex,
  };
}
