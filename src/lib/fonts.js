import FontFaceObserver from 'fontfaceobserver';
import { kebabCase } from 'lodash';

export const webFonts = {
  Comfortaa: 'https://fonts.googleapis.com/css?family=Comfortaa'
};

export const Fonts = () => {
  try {
    Object.keys(webFonts).forEach((fontName) => {
      const font = new FontFaceObserver(fontName);
      font.load().then(() => {
        document.documentElement.classList.add(kebabCase(fontName));
      });
    });
  } catch (e) {
    console.error(e);
  }
};
