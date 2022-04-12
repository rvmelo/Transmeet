import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      primaryLighter: string;

      secondary: string;
      secondaryDark: string;
      secondaryLight: string;
      secondaryLighter: string;

      gray: string;
      grayLight: string;
      grayLighter: string;
      grayDark: string;
      grayDarker: string;

      success: string;
      error: string;
      warning: string;
      info: string;

      textGray: string;
      textBlack: string;
      textGrayLight: string;
      textWhite: string;

      background: string;
      backgroundDark: string;
      text: string;
      mediumGray: string;
      lightGray: string;
    };
    fonts: {
      headings: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
        h5: number;
        h6: number;
      };

      bodyText: {
        regular: string;
        blockQuotes: string;
        strong: string;
        italic: string;
        mediumBase: string;
        base: string;
        boldBase: string;
        smallSemiBold: string;
        smallText: string;
        mediumUltraSmall: string;
        ultraSmallText: string;
      };

      displayText: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
      };

      sizes: {
        xs: number;
        sm: number;
        m: number;
        lg: number;
        xl: number;
      };
      family: {
        bold700: string;
        extraBold800: string;
        regular400: string;
        semiBold600: string;
      };
    };
  }
}
