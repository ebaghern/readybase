import { AccordionItem as AccItem } from 'react-accessible-accordion';
import RaisedTextBlock from 'components/RaisedTextBlock';
import cx from 'classnames';

const AccordionItem = ({ className, children, expanded, ...rest }) => {
  return (
    <AccItem
      className={cx('Accordion__item', className)}
      hideBodyClassName="Accordion__item--closed"
      expanded={expanded}
      {...rest}
    >
      {children}
    </AccItem>
  );
};

export default AccordionItem;
