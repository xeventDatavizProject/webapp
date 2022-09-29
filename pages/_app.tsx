import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'store';
import { setAuthLogged } from 'store/auth/reducer';
import '../styles/_styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    Store.dispatch(setAuthLogged(Boolean(token)));
    setLoggedIn(Boolean(token));
  }, []);

  if (isLoggedIn === null) return 'Loading ...';
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
