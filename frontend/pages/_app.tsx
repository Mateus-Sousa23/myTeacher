import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header/header';
import {ThemeProvider} from '@mui/material';
import thema from '../src/themes/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={thema}>
      <Header></Header>
      <Component {...pageProps} />

    </ ThemeProvider>
  )
}

export default MyApp;
