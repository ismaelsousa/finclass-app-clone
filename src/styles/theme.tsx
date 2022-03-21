import appColors from './colors';

import {DefaultTheme} from 'styled-components';
import { appFonts } from './fonts';

export const theme: DefaultTheme = {
  typography:{
    regular:{
      fontFamily:appFonts.regular,
      letterSpacing:0,
    },
    semiBold:{
      fontFamily:appFonts.semiBold,
      letterSpacing:0,
    },
    bold:{
      fontFamily:appFonts.bold,
      letterSpacing:0
    }
  },
  colors: {
    primary: {
      main: appColors.brand01,
      onMain: appColors.neutralLightest,
    },
    backdrop:{// cortina de fundo
      main: appColors.neutralDark,
      onMain: appColors.neutralLightest, 
    },
    error: {
      main: appColors.errorDarkest,
      onMain: appColors.neutralLightest,
    },
    background: {
      main: appColors.neutralDarkest,
      onMain: appColors.neutralLightest,
    },
    placeholder:{
      main: appColors.neutralMedium,
      onMain:appColors.neutralLightest,
    }
  },
  borders:{
    radius:{
      sm:5
    }
  },
};
