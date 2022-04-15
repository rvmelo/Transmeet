import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SVGLogoProps {
  width: number;
  height: number;
}

export const GoogleIcon: React.FC<SVGLogoProps> = ({width, height}) => {
  const svgMarkup = `<svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_dd_398_30028)">
  <path d="M3 25.5C3 13.0736 13.0736 3 25.5 3V3C37.9264 3 48 13.0736 48 25.5V25.5C48 37.9264 37.9264 48 25.5 48V48C13.0736 48 3 37.9264 3 25.5V25.5Z" fill="white"/>
  <rect width="24" height="24" transform="translate(13.5 13.5)" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.54 25.7613C36.54 24.9459 36.4668 24.1618 36.3309 23.4091H25.5V27.8575H31.6891C31.4225 29.295 30.6123 30.5129 29.3943 31.3284V34.2138H33.1109C35.2855 32.2118 36.54 29.2636 36.54 25.7613Z" fill="#4285F4"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5 36.9998C28.605 36.9998 31.2081 35.97 33.1109 34.2137L29.3943 31.3282C28.3645 32.0182 27.0472 32.4259 25.5 32.4259C22.5047 32.4259 19.9695 30.403 19.0652 27.6848H15.2231V30.6644C17.1154 34.4228 21.0045 36.9998 25.5 36.9998Z" fill="#34A853"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0652 27.6851C18.8352 26.9951 18.7045 26.2581 18.7045 25.5001C18.7045 24.7422 18.8352 24.0051 19.0652 23.3151V20.3356H15.2232C14.4443 21.8881 14 23.6444 14 25.5001C14 27.3558 14.4443 29.1122 15.2232 30.6647L19.0652 27.6851Z" fill="#FBBC05"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5 18.5739C27.1884 18.5739 28.7043 19.1541 29.8961 20.2936L33.1945 16.9952C31.2029 15.1395 28.5997 14 25.5 14C21.0045 14 17.1154 16.577 15.2231 20.3355L19.0652 23.315C19.9695 20.5968 22.5047 18.5739 25.5 18.5739Z" fill="#EA4335"/>
  </g>
  <defs>
  <filter id="filter0_dd_398_30028" x="0" y="0" width="51" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="2"/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_398_30028"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0"/>
  <feBlend mode="normal" in2="effect1_dropShadow_398_30028" result="effect2_dropShadow_398_30028"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_398_30028" result="shape"/>
  </filter>
  </defs>
  </svg>
  `;

  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={`${width}px`} height={`${height}px`} />
  );

  return <SvgImage />;
};
