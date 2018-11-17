import React, { Component } from 'react';
import Head from 'components/Head';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Header from 'components/Header';
import Footer from 'components/Footer';
import headerThemeOptions from 'lib/propTypes/oneOf-headerTheme';

class Layout extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    headerTheme: PropTypes.oneOf(headerThemeOptions)
  };

  static defaultProps = {
    title: 'Readybase'
  };

  state = {
    menuIsActive: false
  };

  toggleMenu = () =>
    this.setState((state) => ({ menuIsActive: !state.menuIsActive }));

  render() {
    const { children, className, title, headerTheme } = this.props;
    const { menuIsActive } = this.state;

    return (
      <div className={cx('Layout', className)}>
        <Head>
          <title>{title}</title>
        </Head>
        <div className="Layout__inner">
          <Header
            pageTitle={title}
            theme={headerTheme}
            menuIsActive={menuIsActive}
            handleMenuToggle={this.toggleMenu}
          />
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
