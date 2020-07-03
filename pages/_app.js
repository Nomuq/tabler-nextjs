import "../css/tabler.css";
import "../css/demo.css";
import "../css/nprogress.css";

import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
