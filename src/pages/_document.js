import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  componentDidMount() {
    // Run client-side scripts
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </div>
    );
  }
}

export default MyDocument;
