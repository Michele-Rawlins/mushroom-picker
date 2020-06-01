import React from 'react';
// import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';

import './Mushroom.scss';

class Mushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;

    return (
      <div className="Mushroom col-md-3">
        <div className="card">
          <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom Card"/>
        <div className="card-body">
          <h5 className="card-title"> {mushroom.name}</h5>
          <p className="card-description"> {mushroom.description}</p>
      </div>
      </div>
      </div>
    );
  }
}

export default Mushroom;
