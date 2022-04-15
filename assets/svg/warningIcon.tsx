import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SVGLogoProps {
  width: number;
  height: number;
}

export const WarningIcon: React.FC<SVGLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M38.5875 14.475L6.82502 67.5C6.17015 68.6341 5.82364 69.9199 5.81998 71.2295C5.81631 72.5391 6.15561 73.8268 6.80412 74.9645C7.45263 76.1022 8.38774 77.0503 9.51642 77.7145C10.6451 78.3786 11.928 78.7357 13.2375 78.75H76.7625C78.072 78.7357 79.3549 78.3786 80.4836 77.7145C81.6123 77.0503 82.5474 76.1022 83.1959 74.9645C83.8444 73.8268 84.1837 72.5391 84.1801 71.2295C84.1764 69.9199 83.8299 68.6341 83.175 67.5L51.4125 14.475C50.744 13.3729 49.8027 12.4617 48.6795 11.8293C47.5563 11.197 46.289 10.8647 45 10.8647C43.711 10.8647 42.4438 11.197 41.3205 11.8293C40.1973 12.4617 39.256 13.3729 38.5875 14.475V14.475Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45 33.75V48.75" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45 63.75H45.0375" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
