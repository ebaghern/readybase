import { AccordionItem as AccItem } from 'react-accessible-accordion';
import classNames from 'classnames';

const AccordionItem = ({ className, children, expanded, ...rest }) => {
  return (
    <AccItem
      className={classNames('Accordion__item', className)}
      hideBodyClassName="Accordion__item--closed"
      expanded={expanded}
      {...rest}
    >
      {children}
    </AccItem>
  );
};

export default AccordionItem;
