import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';
import { Fonts, webFonts } from 'lib/fonts.js';
import 'what-input';
import 'styles/style.scss';

class Head extends Component {
  static propTypes = {
    url: PropTypes.string,
    metaDescription: PropTypes.string,
    metaRobotsNofollow: PropTypes.bool,
    openGraphTitle: PropTypes.string,
    openGraphDescription: PropTypes.string,
    openGraphImage: PropTypes.string,
    twitterTitle: PropTypes.string,
    twitterDescription: PropTypes.string,
    twitterImage: PropTypes.string,
  };

  static defaultProps = {
    metaRobotsNofollow: false,
  };

  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    await Fonts();
    this.setState({ fonts: true });
  }

  renderFontLinks = () => {
    if (webFonts && webFonts.constructor === Object) {
      return Object.keys(webFonts).map(fontName => (
        <link key={fontName} rel="stylesheet" href={webFonts[fontName]} />
      ));
    }
  };

  render() {
    const {
      url,
      metaDescription: metaDesc,
      metaRobotsNofollow: noFollow,
      openGraphTitle: ogTitle,
      openGraphDescription: ogDesc,
      openGraphImage: ogImage,
      twitterTitle: twTitle,
      twitterDescription: twDesc,
      twitterImage: twImage,
      children,
      ...rest
    } = this.props;
    const { fontsLoaded } = this.state;
    return (
      <>
        <NextHead {...rest}>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          {/* @todo: consider removing conditional */ fontsLoaded && this.renderFontLinks()}
          {noFollow && <meta name="robots" content="noindex, nofollow" />}
          {metaDesc && <meta name="description" content={metaDesc} />}
          {ogTitle && <meta property="og:title" content={ogTitle} />}
          {ogDesc && <meta property="og:description" content={ogDesc} />}
          {ogImage && <meta property="og:image" content={ogImage} />}
          {url && <meta property="og:url" content={url} />}
          {twTitle && <meta property="twitter:title" content={twTitle} />}
          {twDesc && <meta property="twitter:description" content={twDesc} />}
          {twImage && <meta property="twitter:image" content={twImage} />}
          {children}
        </NextHead>
      </>
    );
  }
}

export default Head;
