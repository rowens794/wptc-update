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
          <script
            src="//code.tidio.co/z726ob5neqrmftts0lqettcdjgy7ywkc.js"
            async
          ></script>
        )}

        {env === 'production' && (
          <>
            {`
              <script type="text/javascript">
                _linkedin_partner_id = "4149268";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                </script><script type="text/javascript">
                (function(l) {
                if(!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);})(window.lintrk);
              </script>
            `}

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
