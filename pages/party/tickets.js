import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>Orca Tournament Party Tickets - 3rd Nov 2018</title>
      <meta name="description" content="Purchase tickets for the London Tournament Party on 3rd November 2018." />
      <meta name="image" content="https://orca2018.com/static/logo.png" />
      <meta itemProp="name" content="Orca Tournament Party Tickets - 3rd Nov 2018" />
      <meta itemProp="description" content="Purchase tickets for the London Tournament Party on 3rd November 2018." />
      <meta itemProp="image" content="https://orca2018.com/static/logo.png" />
    </Head>
    <style jsx>{`
      iframe {
        position: absolute;
        left:0;
        right:0;
        bottom:0;
        top:0;
        border:0;
      }
    `}</style>
    <iframe id="typeform-full" width="100%" height="100%" frameBorder="0" src="https://luke61.typeform.com/to/RdZ5n5"></iframe>
    <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
  </div>
)
