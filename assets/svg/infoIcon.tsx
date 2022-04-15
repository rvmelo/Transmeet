import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SVGLogoProps {
  width: number;
  height: number;
}

export const InfoIcon: React.FC<SVGLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M45 82.5C65.7107 82.5 82.5 65.7107 82.5 45C82.5 24.2893 65.7107 7.5 45 7.5C24.2893 7.5 7.5 24.2893 7.5 45C7.5 65.7107 24.2893 82.5 45 82.5Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45 30V45" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45 60H45.0375" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
