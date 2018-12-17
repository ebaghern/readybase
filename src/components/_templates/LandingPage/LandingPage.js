import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Head from 'components/Head';
import Link from 'components/Link';
import smart from 'lib/utils/smartContent';
import ReadybaseLogo from 'static/images/readybase-logo.svg';
import Back from 'static/images/ic_arrow_back.svg';

class LandingPage extends Component {
  static propTypes = {
    backLink: PropTypes.string,
    className: PropTypes.string,
    showPageTitle: PropTypes.bool,
    title: PropTypes.string
  };

  static defaultProps = {
    showPageTitle: true,
    title: 'Readybase'
  };

  renderPageTitle = () =>
    this.props.showPageTitle && (
      <h1 className="LandingPage__pageTitle">{smart(this.props.title)}</h1>
    );

  renderBackButtonText = () => (
    <>
      <Back className="LandingPage__backIcon" />
      <span className="LandingPage__backText">Go Back</span>
    </>
  );

  renderBackButton = () => {
    const { backLink } = this.props;
    const className = 'LandingPage__backButton';
    const backLinkProps = backLink
      ? { href: backLink }
      : { onClick: () => Router.back(), className };
    return backLink ? (
      <Link {...backLinkProps}>
        <a className={className}>{this.renderBackButtonText()}</a>
      </Link>
    ) : (
      <button {...backLinkProps}>{this.renderBackButtonText()}</button>
    );
  };

  render() {
    const { children, className, title } = this.props;

    return (
      <div className={cx('LandingPage', className)}>
        <Head>
          <title>{title} | ReadyBase</title>
        </Head>
        <header className="LandingPage__header">
          <div className="LandingPage__logoWrapper">
            <Link href="/" prefetch>
              <a className="LandingPage__logoLink">
                <ReadybaseLogo className="LandingPage__logo" />
                <span className="LandingPage__logoTitle">ReadyBase</span>
              </a>
            </Link>
          </div>
        </header>
        <div className="LandingPage__inner">
          {React.Children.map(children, (child, i) => (
            <div key={i} className="LandingPage__innerWrap">
              {/* i === 0 && this.renderBackButton() */}
              {i === 0 && this.renderPageTitle()}
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
