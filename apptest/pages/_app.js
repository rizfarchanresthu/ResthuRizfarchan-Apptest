import '../styles/globals.css'
import { Provider } from 'react-redux'
import React from 'react';
import store from '../redux/store';
import withRedux from "next-redux-wrapper";
import * as Header from '../component/Header'
import * as Footer from '../component/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Header.Desktop />
        <Header.Mobile />
        <Component {...pageProps}/>
        <Footer.Primary />
        <Footer.Mobile />
    </Provider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
