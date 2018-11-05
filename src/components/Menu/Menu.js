import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MenuItem from './components/MenuItem';
import MenuLink from './components/MenuLink';
import shape from 'lib/propTypes/shape-menuItem';
import sr from 'lib/utils/screenReaderText';
import './Menu.scss';

class Menu extends Component {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.arrayOf(shape).isRequired
  };

  renderSubMenu = (children) => {
    if (children && children.length) {
      return (
        <ul className="Menu__submenu">{this.renderMenuItems(children)}</ul>
      );
    }
  };

  renderMenuItems = (items) =>
    items.map((item) => {
      const { id, href, options, children } = item;
      const { target, className, hideLabel } = options || {};

      return (
        <MenuItem
          className={className}
          key={id}
          hasChildren={!!(children && children.length)}
        >
          <MenuLink
            href={href}
            label={hideLabel ? sr(item.label) : item.label}
            target={target}
          />
          {this.renderSubMenu(children)}
        </MenuItem>
      );
    });

  render() {
    const { className, items } = this.props;
    return (
      <ul className={cx('Menu', className)}>{this.renderMenuItems(items)}</ul>
    );
  }
}

export default Menu;
