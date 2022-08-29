import '@/styles/tailwind.css'
import 'focus-visible'
import ReactGA from 'react-ga4'

export default function App({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    //@ts-ignore
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) //hard coded for access client side
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
  }

  return <Component {...pageProps} />
}
