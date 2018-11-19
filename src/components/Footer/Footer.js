import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Menu from 'components/Menu';
import smart from 'lib/utils/smartContent';
import menuItemShape from 'lib/propTypes/shape-menuItem';
import menuItems from 'data/menu-footerNav';
import contactInfo from 'data/contact';
import ReadybaseLogo from 'static/images/readybase-logo.svg';

class Footer extends Component {
  static propTypes = {
    className: PropTypes.string,
    contactInfo: PropTypes.object,
    menuItems: PropTypes.arrayOf(menuItemShape)
  };

  static defaultProps = {
    menuItems,
    contactInfo
  };

  render() {
    const { className, contactInfo, menuItems } = this.props;
    const { address, email } = contactInfo;
    return (
      <footer className={cx('Footer', className)}>
        <div className="Footer__contentWrapper">
          <div className="Footer__logoWrapper">
            <ReadybaseLogo className="Footer__logo" />
          </div>
          <nav className="Footer__nav">
            <Menu className="Footer__navMenu" items={menuItems} />
          </nav>
          <address className="Footer__contactInfo">
            <p>
              {address.street1}
              <br />
              {`${address.city}, ${address.state} ${address.zip}`}
            </p>
            <p>{email}</p>
          </address>
          <div className="Footer__buttonGroup">
            <Button>Gain Access to Freelancers</Button>
            <Button>Become a ReadyBase Freelancer</Button>
          </div>
          <div className="Footer__copyright">
            <p
              dangerouslySetInnerHTML={{
                __html: `&copy; ${new Date().getFullYear()} ReadyBase, LLC`
              }}
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
