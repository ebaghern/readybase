export default class Calendly {
  domReady = cb => {
    let ready = false;
    let e = false;

    const _setupListeners = () => {
      if (document.addEventListener) {
        document.removeEventListener('DOMContentLoaded', o);
        window.removeEventListener('load', o);
      } else {
        document.detachEvent('onreadystatechange', o);
        window.detachEvent('onload', o);
      }
    };

    const addListeners = () => {
      ready = true;
      _setupListeners();
      return cb();
    };

    const execute = () => {
      const evr =
        !document.addEventListener &&
        'load' !== event.type &&
        'complete' !== document.readyState;
      ready || evr || addListeners();
    };

    if ('complete' === document.readyState) {
      cb();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', execute);
      window.addEventListener('load', execute);
    } else {
      document.attachEvent('onreadystatechange', execute);
      window.attachEvent('onload', execute);
      let i = false;
      try {
        i = null == window.frameElement && document.documentElement;
      } catch (r) {}
      i &&
        i.doScroll &&
        !(function l() {
          if (!e) {
            try {
              i.doScroll('left');
            } catch (o) {
              return setTimeout(l, 50);
            }
            (e = true), _setupListeners(), t();
          }
        })();
    }
  };
}

function calendlyInit() {
  this.Calendly = {};
}

calendlyInit.call(this),
  (Calendly.domReady = t => {
    let e = false;

    const n = () => {
      document.addEventListener
        ? (document.removeEventListener('DOMContentLoaded', o),
          window.removeEventListener('load', o))
        : (document.detachEvent('onreadystatechange', o),
          window.detachEvent('onload', o));
    };

    var o = () => {
      e ||
        (!document.addEventListener &&
          'load' !== event.type &&
          'complete' !== document.readyState) ||
        ((e = true), _setupListeners(), t());
    };

    if ('complete' === document.readyState) t();
    else if (document.addEventListener)
      document.addEventListener('DOMContentLoaded', o),
        window.addEventListener('load', o);
    else {
      document.attachEvent('onreadystatechange', o),
        window.attachEvent('onload', o);
      let i = false;
      try {
        i = null == window.frameElement && document.documentElement;
      } catch (r) {}
      i &&
        i.doScroll &&
        !(function l() {
          if (!e) {
            try {
              i.doScroll('left');
            } catch (o) {
              return setTimeout(l, 50);
            }
            (e = true), _setupListeners(), t();
          }
        })();
    }
  }),
  (() => {
    (Calendly.initInlineWidgets = () =>
      Calendly.domReady(() => Calendly.createInlineWidgets())),
      (Calendly.initBadgeWidget = t =>
        Calendly.domReady(() => Calendly.createBadgeWidget(t))),
      (Calendly.createInlineWidgets = () => {
        let t;
        let e;
        let n;
        let o;
        let i;
        for (
          e = document.querySelectorAll('.calendly-inline-widget'),
            i = [],
            n = 0,
            o = e.length;
          o > n;
          n++
        )
          (t = e[n]),
            t.getAttribute('data-processed')
              ? i.push(void 0)
              : (t.setAttribute('data-processed', true),
                i.push(new Calendly.Iframe(t, true, 'Inline')));
        return i;
      }),
      (Calendly.createBadgeWidget = function({ color, text, branding, url }) {
        return (
          this.destroyBadgeWidget(),
          (Calendly.badgeWidget = new Calendly.BadgeWidget({
            color: color,
            text: text,
            branding: branding,
            onClick() {
              return Calendly.showPopupWidget(url, 'PopupWidget');
            },
          }))
        );
      }),
      (Calendly.destroyBadgeWidget = () =>
        Calendly.badgeWidget
          ? (Calendly.badgeWidget.destroy(), delete Calendly.badgeWidget)
          : void 0),
      (Calendly.showPopupWidget = function(t, e) {
        return (
          null == e && (e = 'PopupText'),
          this.closePopupWidget(),
          (Calendly.popupWidget = new Calendly.PopupWidget(
            t,
            () => delete Calendly.popupWidget,
            e
          )),
          Calendly.popupWidget.show()
        );
      }),
      (Calendly.closePopupWidget = () =>
        Calendly.popupWidget ? Calendly.popupWidget.close() : void 0);
  }).call(this),
  (() => {
    const t =
      [].indexOf ||
      function(t) {
        for (let e = 0, n = this.length; n > e; e++)
          if (e in this && this[e] === t) return e;
        return -1;
      };
    Calendly.Iframe = (() => {
      function e(t, e, n) {
        (this.parent = t),
          (this.inlineStyles = null != e ? e : false),
          (this.embedType = n),
          this.build(),
          this.inject();
      }
      return (
        (e.prototype.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )),
        (e.prototype.build = function() {
          return (
            (this.node = document.createElement('iframe')),
            (this.node.src = this.getSource()),
            (this.node.width = '100%'),
            (this.node.height = '100%'),
            (this.node.frameBorder = '0')
          );
        }),
        (e.prototype.inject = function() {
          return (
            this.format(),
            this.parent.appendChild(this.buildSpinner()),
            this.parent.appendChild(this.node)
          );
        }),
        (e.prototype.getSource = function() {
          let t;
          return (
            (t = `${this.getUrl()}${this.getDivider()}${this.getParams()}`),
            this.filterConsentParam(t)
          );
        }),
        (e.prototype.getUrl = function() {
          return null != this.url
            ? this.url
            : (this.url = this.parent.getAttribute('data-url').split('#')[0]);
        }),
        (e.prototype.getDivider = function() {
          return !this.getUrl().includes('?') ? '?' : '&';
        }),
        (e.prototype.getParams = function() {
          let t;
          let e;
          let n;
          let o;
          (e = `embed_domain=${this.getDomain()}&embed_type=${this.embedType}`),
            (n = this.getHostUtmParams());
          for (t in n)
            (o = n[t]), t in this.getBookingUtmParams() || (e += `&${t}=${o}`);
          return e;
        }),
        (e.prototype.getUrlParams = t => {
          let e;
          let n;
          let o;
          let i;
          let r;
          let l;
          let a;
          let d;
          let s;
          let u;
          for (
            a = document.createElement('a'),
              a.href = t,
              r = a.search.substr(1),
              l = {},
              d = r.split('&'),
              e = 0,
              o = d.length;
            o > e;
            e++
          )
            (i = d[e]),
              (s = i.split('=')),
              (n = s[0]),
              (u = s[1]),
              void 0 !== u && (l[n.toLowerCase()] = u);
          return l;
        }),
        (e.prototype.getUtmUrlParams = function(e) {
          let n;
          let o;
          let i;
          let r;
          let l;
          (r = [
            'utm_campaign',
            'utm_source',
            'utm_medium',
            'utm_content',
            'utm_term',
          ]),
            (o = {}),
            (i = this.getUrlParams(e));
          for (n in i) (l = i[n]), t.call(r, n) >= 0 && (o[n] = l);
          return o;
        }),
        (e.prototype.getHostUtmParams = function() {
          return this.getUtmUrlParams(window.location.href);
        }),
        (e.prototype.getBookingUtmParams = function() {
          return this.getUtmUrlParams(this.getUrl());
        }),
        (e.prototype.getDomain = () =>
          encodeURIComponent(document.location.host)),
        (e.prototype.filterConsentParam = t =>
          t.replace(/consent_accept=1&?/g, '')),
        (e.prototype.format = function() {
          return this.isMobile ? this.formatMobile() : this.formatDesktop();
        }),
        (e.prototype.formatDesktop = function() {
          return this.inlineStyles
            ? this.parent.setAttribute(
                'style',
                `position: relative;${this.parent.getAttribute('style')}`
              )
            : void 0;
        }),
        (e.prototype.formatMobile = function() {
          return this.inlineStyles
            ? this.parent.setAttribute(
                'style',
                `position: relative;overflow-y:auto;-webkit-overflow-scrolling:touch;${this.parent.getAttribute(
                  'style'
                )}`
              )
            : (this.parent.className += ' mobile');
        }),
        (e.prototype.buildSpinner = function() {
          let t;
          return (
            (t = document.createElement('div')),
            (t.className = 'spinner'),
            t.appendChild(this.buildBounce(1)),
            t.appendChild(this.buildBounce(2)),
            t.appendChild(this.buildBounce(3)),
            t
          );
        }),
        (e.prototype.buildBounce = t => {
          let e;
          return (
            (e = document.createElement('div')), (e.className = `bounce${t}`), e
          );
        }),
        e
      );
    })();
  }).call(this),
  (() => {
    const t = (t, e) =>
      function(...args) {
        return t.apply(e, args);
      };
    Calendly.PopupWidget = (() => {
      function e(e, n, o) {
        (this.url = e),
          (this.onClose = n),
          (this.embedType = o),
          (this.close = t(this.close, this)),
          (this.pageRoot = document.getElementsByTagName('html')[0]);
      }
      return (
        (e.prototype.show = function() {
          return (
            this.buildOverlay(), this.insertOverlay(), this.lockPageScroll()
          );
        }),
        (e.prototype.close = function() {
          return this.destroyOverlay(), this.onClose(), this.unlockPageScroll();
        }),
        (e.prototype.buildOverlay = function() {
          return (
            (this.overlay = document.createElement('div')),
            (this.overlay.className = 'calendly-overlay'),
            this.overlay.appendChild(this.buildCloseOverlay()),
            this.overlay.appendChild(this.buildPopup())
          );
        }),
        (e.prototype.insertOverlay = function() {
          return document.body.insertBefore(
            this.overlay,
            document.body.firstChild
          );
        }),
        (e.prototype.buildCloseOverlay = function() {
          let t;
          return (
            (t = document.createElement('div')),
            (t.className = 'calendly-close-overlay'),
            (t.onclick = this.close),
            t
          );
        }),
        (e.prototype.buildPopup = function() {
          let t;
          return (
            (t = document.createElement('div')),
            (t.className = 'calendly-popup'),
            t.appendChild(this.buildPopupContent()),
            t.appendChild(this.buildCloseButton()),
            t
          );
        }),
        (e.prototype.buildPopupContent = function() {
          let t;
          return (
            (t = document.createElement('div')),
            (t.className = 'calendly-popup-content'),
            t.setAttribute('data-url', this.url),
            new Calendly.Iframe(t, false, this.embedType),
            t
          );
        }),
        (e.prototype.buildCloseButton = function() {
          let t;
          return (
            (t = document.createElement('div')),
            (t.className = 'calendly-popup-close'),
            (t.onclick = this.close),
            t
          );
        }),
        (e.prototype.destroyOverlay = function() {
          return this.overlay.parentNode.removeChild(this.overlay);
        }),
        (e.prototype.lockPageScroll = function() {
          return (this.pageRoot.className += ' calendly-page-scroll-locked');
        }),
        (e.prototype.unlockPageScroll = function() {
          return (this.pageRoot.className = this.pageRoot.className.replace(
            ' calendly-page-scroll-locked',
            ''
          ));
        }),
        e
      );
    })();
  }).call(this),
  (() => {
    Calendly.BadgeWidget = (() => {
      function t(t) {
        (this.options = t), this.buildWidget(), this.insertWidget();
      }
      return (
        (t.prototype.destroy = function() {
          return this.widget.parentNode.removeChild(this.widget);
        }),
        (t.prototype.buildWidget = function() {
          return (
            (this.widget = document.createElement('div')),
            (this.widget.className = 'calendly-badge-widget'),
            this.widget.appendChild(this.buildContent())
          );
        }),
        (t.prototype.insertWidget = function() {
          return document.body.insertBefore(
            this.widget,
            document.body.firstChild
          );
        }),
        (t.prototype.buildContent = function() {
          let t;
          return (
            (t = document.createElement('div')),
            (t.className = 'calendly-badge-content'),
            '#ffffff' === this.options.color && (t.className += ' white'),
            (t.onclick = this.options.onClick),
            (t.innerHTML = this.options.text),
            (t.style.background = this.options.color),
            this.options.branding && t.appendChild(this.buildBranding()),
            t
          );
        }),
        (t.prototype.buildBranding = () => {
          let t;
          return (
            (t = document.createElement('span')),
            (t.innerHTML = 'powered by Calendly'),
            t
          );
        }),
        t
      );
    })();
  }).call(this),
  Calendly.initInlineWidgets();
