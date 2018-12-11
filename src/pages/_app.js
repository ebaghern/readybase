import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { PageTransition } from 'next-page-transitions';
import NProgress from 'nprogress';
import 'styles/style.scss';

if (Router.events) {
  NProgress.configure({
    template: `
    <div class="nprogress__bar" role="bar">
      <div class="nprogress__peg"></div>
    </div>
    <div class="nprogress__spinner" role="spinner">
      <div class="nprogress__spinnerIcon"></div>
    </div>
    `
  });
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
          classNames="pageTransition-"
          loadingDelay={0}
          loadingTimeout={{
            enter: 400,
            exit: 0
          }}
          loadingClassNames="pageTransition__loadingIndicator-"
        >
          <Component {...pageProps} />
        </PageTransition>
      </Container>
    );
  }
}

export default ReadyBase;
