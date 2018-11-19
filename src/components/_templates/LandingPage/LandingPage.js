import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'components/Head';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReadybaseLogo from 'static/images/readybase-logo.svg';

class LandingPage extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
  };

  static defaultProps = {
    title: 'Readybase'
  };

  render() {
    const { children, className, title } = this.props;

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
