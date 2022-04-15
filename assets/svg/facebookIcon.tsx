import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SVGLogoProps {
  width: number;
  height: number;
}

export const FacebookIcon: React.FC<SVGLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5Z" fill="#1877F2"/>
  <rect width="24" height="24" transform="translate(10.5 10.5)" fill="#1877F2"/>
  <path d="M34 22.5699C34 16.2186 28.8513 11.0699 22.5 11.0699C16.1487 11.0699 11 16.2186 11 22.5699C11 28.3099 15.2054 33.0674 20.7031 33.9302V25.8941H17.7832V22.5699H20.7031V20.0363C20.7031 17.1541 22.42 15.5621 25.0468 15.5621C26.305 15.5621 27.6211 15.7867 27.6211 15.7867V18.6168H26.171C24.7424 18.6168 24.2969 19.5032 24.2969 20.4127V22.5699H27.4863L26.9765 25.8941H24.2969V33.9302C29.7946 33.0674 34 28.3099 34 22.5699Z" fill="white"/>
  </svg>
  `;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
