import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import smart from 'lib/utils/smartContent';
import themeOptions from 'lib/propTypes/oneOf-headerTheme';

class PageHeader extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.oneOf(themeOptions),
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    children: PropTypes.func,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };

  static defaultProps = {
    theme: 'light'
  };

  _wrapperEl = React.createRef();

  /* componentDidMount() {
    const { current } = this._wrapperEl;
    if (current) {
    }
  } */

  render() {
    const {
      className,
      theme,
      heading,
      subHeading,
      content,
      children
    } = this.props;
    return (
      <section
        className={cx(className, 'PageHeader', `PageHeader--${theme}`)}
        ref={this._wrapperEl}
      >
        <div className="PageHeader__contentWrapper">
          {heading && <h1 className="PageHeader__heading">{smart(heading)}</h1>}
          {subHeading && (
            <h2 className="PageHeader__subHeading">{smart(subHeading)}</h2>
          )}
          {content &&
            (React.isValidElement(content) ? (
              <div className="PageHeader__content">{content}</div>
            ) : (
              <p className="PageHeader__content">{smart(content)}</p>
            ))}
          {children && children('PageHeader')}
        </div>
      </section>
    );
  }
}

export default PageHeader;
