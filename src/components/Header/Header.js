import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from 'components/Button';
import Hamburger from 'components/Hamburger';
import Menu from 'components/Menu';
import menuItemShape from 'lib/propTypes/shape-menuItem';
import themeOptions from 'lib/propTypes/oneOf-headerTheme';
import menuItems from 'data/menu-topNav';
import ReadybaseLogo from 'static/images/readybase-logo.svg';

class Header extends Component {
  static propTypes = {
    handleMenuToggle: PropTypes.func.isRequired,
    menuIsActive: PropTypes.bool,
    menuItems: PropTypes.arrayOf(menuItemShape),
    theme: PropTypes.oneOf(themeOptions),
    pageTitle: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string
  };

  static defaultProps = {
    menuIsActive: false,
    menuItems,
    theme: 'light',
    pageTitle: 'Readybase',
    buttonText: 'Gain Access to Freelancers',
    buttonLink: 'access-freelancers'
  };

  state = {
    isScrolled: false
  };

  headerEl = React.createRef();

  componentDidMount() {
    const headerEl = this.headerEl.current;
    if (headerEl) {
      addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const headerEl = this.headerEl.current;
    if (headerEl) {
      const scrollPos = window.scrollY;
      const headerHeight = headerEl.getBoundingClientRect().height;
      const { isScrolled } = this.state;
      if (scrollPos > headerHeight && !isScrolled) {
        this.setState({ isScrolled: true });
      } else if (scrollPos <= headerHeight && isScrolled) {
        this.setState({ isScrolled: false });
      }
    }
  };

  render() {
    const {
      menuIsActive,
      handleMenuToggle,
      menuItems,
      pageTitle,
      buttonText,
      buttonLink,
      theme
    } = this.props;
    const { isScrolled } = this.state;
    return (
      <header
        ref={this.headerEl}
        className={cx('Header', {
          [`Header--${theme}`]: !isScrolled,
          'Header--menuActive': menuIsActive,
          'Header--isScrolled': isScrolled
        })}
      >
        <div className="Header__logoWrapper">
          <Link href="/" prefetch>
            <a className="Header__logoLink">
              <ReadybaseLogo className="Header__logo" />
              <h1 className="Header__pageTitle">{pageTitle}</h1>
            </a>
          </Link>
        </div>
        <nav
          className={cx('Header__nav', {
            'Header__nav--active': menuIsActive
          })}
        >
          <Menu className="Header__navMenu" items={menuItems} />
          <Button className="Header__button hide-large-up" href={buttonLink}>
            {buttonText}
          </Button>
        </nav>
        <Hamburger
          className={cx('Header__navToggle', {
            'Header__navToggle--active': menuIsActive
          })}
          handleToggle={handleMenuToggle}
          isActive={menuIsActive}
        />
        <Button className="Header__button hide-large-down" href={buttonLink}>
          {buttonText}
        </Button>
      </header>
    );
  }
}

export default Header;
