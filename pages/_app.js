import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SessionProvider, useSession, signIn } from 'next-auth/react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Dashboard from './admin'
import '../styles/globals.css';
const clientSideEmotionCache = createEmotionCache();
import Link from 'next/link';
import { Typography } from '@mui/material';

export default function MyApp({
  Component,
  pageProps: { session, emotionCache = clientSideEmotionCache, ...pageProps },
}) {
  useEffect(() => {
    console.log("App layout mounted");
    return () => console.log("App layout unmounted");
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={session}>
          
            {Component.auth ? (
         
              <Auth>
                <Layout Component={<Component pageProps={pageProps} />} />
              </Auth>

            ) : (

              <Component {...pageProps} />

            )}
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>

  )
};


const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

function Auth({ children }) {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  useEffect(() => {
    if (status === "loading") return
    if (!isUser) signIn()
  }, [isUser, status])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};