import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SVGLogoProps {
  width: number;
  height: number;
  color?: string;
}

export const HomeIcon: React.FC<SVGLogoProps> = ({width, height, color}) => {
  const svgMarkup = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.5 9L12.5 2L21.5 9V20C21.5 20.5304 21.2893 21.0391 20.9142 21.4142C20.5391 21.7893 20.0304 22 19.5 22H5.5C4.96957 22 4.46086 21.7893 4.08579 21.4142C3.71071 21.0391 3.5 20.5304 3.5 20V9Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.5 22V12H15.5V22" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
