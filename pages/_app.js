import React from 'react'
import App from 'next/app'
import { ConfigProvider } from 'antd'

import pt_BR from "antd/lib/locale-provider/pt_BR";
import "moment/locale/pt-br";


class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return  (
        <ConfigProvider locale={pt_BR}>
            <h1>My App</h1>
            <Component {...pageProps} />
        </ConfigProvider>
    )
  }
}

export default MyApp