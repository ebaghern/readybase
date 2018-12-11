import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { PageTransition } from 'next-page-transitions';
import NProgress from 'nprogress';
import 'styles/style.scss';

if (Router.events) {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
}

class ReadyBase extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <PageTransition
          timeout={400}
          classNames="PageTransition-"
          loadingDelay={0}
          loadingTimeout={{
            enter: 400,
            exit: 0
          }}
          // loadingClassNames="LoadingIndicator-"
        >
          <Component {...pageProps} />
        </PageTransition>
      </Container>
    );
  }
}

export default ReadyBase;
