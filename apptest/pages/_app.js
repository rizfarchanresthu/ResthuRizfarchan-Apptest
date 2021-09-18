import '../styles/globals.css'
import { Provider } from 'react-redux'
import React from 'react';
import store from '../redux/store';
import withRedux from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps}/>
    </Provider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
