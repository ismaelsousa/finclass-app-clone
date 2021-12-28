import appColors from './colors';

import {DefaultTheme} from 'styled-components';
import { appFonts } from './fonts';

// export const theme: Theme = {
//   ...DefaultTheme,
//   colors:{
//    ...DefaultTheme.colors,
//    primary:appColors['btn-primary-hover-bg'],
//    background:appColors['btn-secondary-bg'],
//    accent:appColors['btn-primary-hover-bg'],
//    backdrop: appColors['btn-secondary-bg'],
//    surface:appColors.bg,
//    text: appColors.text, 
//    onSurface: appColors.text, 
//    error:appColors.errorDarkest,
//    disabled:appColors['btn-secondary-bg'],
//    notification:appColors['btn-primary-bg'],
//    placeholder:appColors['toggle-bg-readonly']
//   },
//   roundness:5,
//   fonts:{
//     ...DefaultTheme.fonts,
//     regular: {
//       fontFamily:appFonts.Regular.fontFamily,
//       fontWeight:'400',
//     },
//   } 
// }


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
      main: appColors.brand02,
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
      main: appColors.black,
      onMain: appColors.neutralLightest,
    },
    surface: {
      main: appColors.neutralDarkest,
      onMain:appColors.neutralLightest,
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
