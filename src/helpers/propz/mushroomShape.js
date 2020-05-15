import PropTypes from 'prop-types';

const mushroomShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isMagic: PropTypes.bool.isRequired,
  isPoisonous: PropTypes.bool.isRequired,
  isDeadly: PropTypes.bool.isRequired,
  isFood: PropTypes.bool.isRequired,
  isNormal: PropTypes.bool.isRequired,
  isPsychedelic: PropTypes.bool.isRequired,
});

export default { mushroomShape };
