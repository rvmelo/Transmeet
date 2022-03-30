import React, {useCallback, useRef, useState} from 'react';
import {ScrollView} from 'react-native';
import {SCREEN_WIDTH} from '../../constants/dimensions';

interface ReturnType {
  scrollRef: React.MutableRefObject<ScrollView | null | undefined>;
  onForwardNavigation: () => void;
  onBackwardNavigation: () => void;
  onScrollToEnd: () => void;
  scrollIndex: number;
}

export function useOnBoarding(): ReturnType {
  const [scrollMultiplyFactor, setScrollMultiplyFactor] = useState(1);
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollRef = useRef<ScrollView | null>();

  const onScrollToEnd = useCallback(() => {
    scrollRef?.current?.scrollTo({
      x: SCREEN_WIDTH * 3,
      y: 0,
      animated: true,
    });

    setScrollIndex(2);
    setScrollMultiplyFactor(2);
  }, []);

  const onForwardNavigation = useCallback(() => {
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

  const onBackwardNavigation = useCallback(() => {
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
    onForwardNavigation,
    onBackwardNavigation,
    onScrollToEnd,
    scrollIndex,
  };
}
