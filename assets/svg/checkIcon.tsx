import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SVGLogoProps {
  width: number;
  height: number;
}

export const CheckIcon: React.FC<SVGLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M82.5 41.55V45C82.4954 53.0866 79.8769 60.955 75.035 67.4318C70.1931 73.9086 63.3873 78.6468 55.6326 80.9396C47.8779 83.2324 39.5897 82.9571 32.0043 80.1547C24.4188 77.3522 17.9425 72.1729 13.5411 65.389C9.13975 58.6051 7.04922 50.5802 7.58129 42.5112C8.11336 34.4421 11.2395 26.7612 16.4935 20.614C21.7476 14.4668 28.8479 10.1827 36.7357 8.40053C44.6235 6.61839 52.876 7.43374 60.2625 10.725" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M82.5 15L45 52.5375L33.75 41.2875" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
