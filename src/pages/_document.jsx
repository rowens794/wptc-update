import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  const env = process.env.NODE_ENV

  return (
    <Html className="h-full scroll-smooth bg-gray-50 antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col ">
        <Main />
        <NextScript />

        {env === 'production' && (
          <>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                alt=""
                src="https://px.ads.linkedin.com/collect/?pid=4149268&fmt=gif"
              />
            </noscript>
          </>
        )}
      </body>
    </Html>
  )
}
