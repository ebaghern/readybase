import PropTypes from 'prop-types';

const shape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  options: PropTypes.shape({
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    className: PropTypes.string,
    hideLabel: PropTypes.bool
  })
});
shape.children = PropTypes.arrayOf(shape);

export default shape;
