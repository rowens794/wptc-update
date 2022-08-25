import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full scroll-smooth bg-gray-50 antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col ">
        <Main />
        <NextScript />
        <script
          src="//code.tidio.co/z726ob5neqrmftts0lqettcdjgy7ywkc.js"
          async
        ></script>
      </body>
    </Html>
  )
}
