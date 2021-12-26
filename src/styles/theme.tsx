import { DefaultTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import appColors from './colors';
import { appFonts } from './fonts';

export const theme: Theme = {
  ...DefaultTheme,
  colors:{
   ...DefaultTheme.colors,
   primary:appColors['btn-primary-hover-bg'],
   background:appColors['btn-secondary-bg'],
   accent:appColors['btn-primary-hover-bg'],
   backdrop: appColors['btn-secondary-bg'],
   surface:appColors.bg,
   text: appColors.text, 
   onSurface: appColors.text, 
   error:appColors.errorDarkest,
   disabled:appColors['btn-secondary-bg'],
   notification:appColors['btn-primary-bg'],
   placeholder:appColors['toggle-bg-readonly']
  },
  roundness:5,
  fonts:{
    ...DefaultTheme.fonts,
    regular: {
      fontFamily:appFonts.Regular.fontFamily,
      fontWeight:'400',
    },
  }
}