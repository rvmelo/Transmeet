import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SVGLogoProps {
  width: number;
  height: number;
}

export const Gradient: React.FC<SVGLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="390" height="421" viewBox="0 0 390 421" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="390" height="421" fill="url(#paint0_radial_640_2797)" fill-opacity="0.8"/>
  <defs>
  <radialGradient id="paint0_radial_640_2797" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(47.189) scale(573.882 344.04)">
  <stop stop-color="#BB4981"/>
  <stop offset="0.71875" stop-color="#1F478B" stop-opacity="0"/>
  </radialGradient>
  </defs>
  </svg>
  
  `;

  const SvgImage = () => (
    <SvgXml
      xml={svgMarkup}
      width={`${width}px`}
      height={`${height}px`}
      style={{position: 'absolute', left: 0}}
    />
  );

  return <SvgImage />;
};
