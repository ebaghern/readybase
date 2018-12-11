import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'components/Head';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReadybaseLogo from 'static/images/readybase-logo.svg';
import Back from 'static/images/ic_arrow_back.svg';

class LandingPage extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    backLink: PropTypes.string
  };

  static defaultProps = {
    title: 'Readybase'
  };

  render() {
    const { children, className, title, backLink } = this.props;

    const BackLink = backLink ? Link : 'button';
    const backLinkProps = backLink
      ? { href: backLink }
      : { onClick: () => Router.back() };

    return (
      <div className={cx('LandingPage', className)}>
        <Head>
          <title>{title}</title>
        </Head>
        <header className="LandingPage__header">
          <div className="LandingPage__logoWrapper">
            <Link href="/" prefetch>
              <a className="LandingPage__logoLink">
                <ReadybaseLogo className="LandingPage__logo" />
                <h1 className="LandingPage__pageTitle">{title}</h1>
              </a>
            </Link>
          </div>
        </header>
        <div className="LandingPage__inner">
          {React.Children.map(children, (child, i) => (
            <div key={i} className="LandingPage__innerWrap">
              {i === 0 && (
                <BackLink {...backLinkProps} className="LandingPage__backButton">
                  <Back className="LandingPage__backIcon" />
                  <span className="screen-reader-text">Go Back</span>
                </BackLink>
              )}
              {child}
            </div>
          ))}
        </div>
        <footer className="LandingPage__footer">
          <p
            dangerouslySetInnerHTML={{
              __html: `&copy; ${new Date().getFullYear()} ReadyBase, LLC`
            }}
          />
        </footer>
      </div>
    );
  }
}

export default LandingPage;
