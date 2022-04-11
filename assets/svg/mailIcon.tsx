import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SVGLogoProps {
  width: number;
  height: number;
  color?: string;
}

export const MailIcon: React.FC<SVGLogoProps> = ({width, height, color}) => {
  const svgMarkup = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 6L12 13L2 6" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
