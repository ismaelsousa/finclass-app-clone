import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import App from './src';
import appColors from './src/styles/colors';
import { useFonts } from 'expo-font';
import { appFonts, fonts } from './src/styles/fonts';

const theme: Theme = {
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
   disabled:appColors['toggle-bg-off'],
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


export default function Main() {
  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded) return null;
  
  return (
    <PaperProvider theme={theme}>
        <App />
    </PaperProvider>
  );
}
