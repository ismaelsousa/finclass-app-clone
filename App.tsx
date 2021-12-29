import App from './src';
import { useFonts } from 'expo-font';
import { fonts } from './src/styles/fonts';
import { theme } from './src/styles/theme';
import { ThemeProvider } from 'styled-components/native';


export default function Main() {
  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded) return null;
  
  return (
    <ThemeProvider theme={theme}>
          <App />
    </ThemeProvider>
  );
}
