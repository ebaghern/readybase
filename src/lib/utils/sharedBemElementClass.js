import cx from 'classnames';
import { flatten } from 'lodash';

export default (element = '', blocks = [], modifiers = []) => {
  const classes = blocks.map((block) => `${block}__${element}`);
  modifiers = modifiers.map((mod) =>
    classes.map((className) => `${className}--${mod}`)
  );
  return cx(...blocks, ...flatten(modifiers));
};
