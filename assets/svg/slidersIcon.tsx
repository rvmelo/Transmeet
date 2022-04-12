import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SVGLogoProps {
  width: number;
  height: number;
}

export const SlidersIcon: React.FC<SVGLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_449_2384)">
  <path d="M4 21L4 14" stroke="#185AA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 10L4 3" stroke="#185AA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 21L12 12" stroke="#185AA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 8L12 3" stroke="#185AA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 21L20 16" stroke="#185AA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 12L20 3" stroke="#185AA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 14L7 14" stroke="#185AA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 8L15 8" stroke="#185AA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 16L23 16" stroke="#185AA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_449_2384">
  <rect width="24" height="24" fill="white"/>
  </clipPath>
  </defs>
  </svg>`;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
