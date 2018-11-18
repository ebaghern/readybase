import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
  PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      })
    )
  })
).isRequired;
