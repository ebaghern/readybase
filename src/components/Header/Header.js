import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Hamburger from 'components/Hamburger';
import Menu from 'components/Menu';
import menuItemShape from 'lib/propTypes/shape-menuItem';
import themeOptions from 'lib/propTypes/oneOf-headerTheme';
import ReadybaseLogo from 'static/images/readybase-logo.svg';
import menuItems from 'data/menu-topNav';
import './Header.scss';

class Header extends Component {
  static propTypes = {
    handleMenuToggle: PropTypes.func.isRequired,
    menuIsActive: PropTypes.bool,
    menuItems: PropTypes.arrayOf(menuItemShape),
    theme: PropTypes.oneOf(themeOptions),
    pageTitle: PropTypes.string
  };

  static defaultProps = {
    menuIsActive: false,
    menuItems,
    theme: 'light',
    pageTitle: 'Readybase'
  };

  render() {
    const {
      menuIsActive,
      handleMenuToggle,
      menuItems,
      pageTitle,
      theme
    } = this.props;
    return (
      <header
        className={cx('Header', `Header--${theme}`, {
          'Header--menuActive': menuIsActive
        })}
      >
        <div className="Header__logoWrapper">
          <Link href="/" prefetch>
            <a className="Header__logoLink">
              <ReadybaseLogo
                className="Header__logo"
              />
              <h1 className="Header__pageTitle">{pageTitle}</h1>
            </a>
          </Link>
        </div>
        <nav className="Header__nav">
          <Menu className="Header__navMenu" items={menuItems} />
          <Hamburger
            className="Header__navToggle"
            handleToggle={handleMenuToggle}
            isActive={menuIsActive}
          />
        </nav>
      </header>
    );
  }
}

export default Header;
