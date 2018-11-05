import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class MenuItem extends Component {
  static defaultProps = {
    hasChildren: false
  };

  static propTypes = {
    hasChildren: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  state = {
    hovered: false
  };

  handleMouseOver = () =>
    this.setState((state) => state.hovered === false && { hovered: true });

  render() {
    const { hovered } = this.state;
    const { className, children, hasChildren } = this.props;
    return (
      <li
        onMouseOver={this.handleMouseOver}
        className={cx('Menu__item', className, {
          'Menu__item--hovered': hovered,
          'Menu__item--has-children': hasChildren
        })}
      >
        {children}
      </li>
    );
  }
}

export default MenuItem;
