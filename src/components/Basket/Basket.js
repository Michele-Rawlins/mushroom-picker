import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
// import mushrooms from '../../helpers/data/mushroomData';
import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),

  }

  render() {
    const { mushrooms } = this.props;
    const makeBasket = mushrooms.map((mushroom, i) => (
      <Mushroom key = {`pickedMushroom${i + 1}`} mushroom={mushroom}/>
    ));
    return (
<div className="Basket d-flex flew-wrap">
  <h2 className="basket-title">Basket</h2>
  { makeBasket }
</div>

    );
  }
}

export default Basket;
