import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'components/Link';

class Button extends Component {
  static defaultProps = {
    disabled: false,
    element: 'button',
    expanded: false,
    htmlType: 'button',
    loading: false
  };

  static propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.string,
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    expanded: PropTypes.bool,
    href: PropTypes.string,
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['large', 'small']),
    type: PropTypes.string
  };

  handleClick = (e) => {
    const { onClick, loading } = this.props;
    if (!!loading) {
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  render() {
    const {
      children,
      className,
      disabled,
      element,
      expanded,
      href,
      htmlType,
      loading,
      size,
      type,
      color,
      ...rest
    } = this.props;

    const classes = cx('Button', className, {
      [`Button--${type}`]: type,
      [`Button--${size}`]: size,
      [`Button--${color}`]: color,
      [`Button--loading`]: loading,
      [`Button--disabled`]: disabled,
      [`Button--expanded`]: expanded
    });
    const Element = element;

    return href ? (
      <Link href={href}>
        <a {...rest} className={classes} onClick={this.handleClick}>
          {children}
        </a>
      </Link>
    ) : (
      <Element
        {...rest}
        type={htmlType}
        className={classes}
        onClick={this.handleClick}
      >
        {children}
      </Element>
    );
  }
}

export default Button;
