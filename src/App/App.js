import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import mushroomShape from '../helpers/propz/mushroomShape';

class App extends React.Component {
  state = {
    mushrooms: [],
    mushroom: mushroomShape.mushroomShape,
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
  }

  render() {
    const { mushrooms } = this.state;

    return (
      <div className="App">
        <h2>Mushrooms</h2>
        <button className="mushroom-picker">Pick a Mushroom</button>
        <Forest mushrooms={mushrooms}/>
        </div>
    );
  }
}

export default App;
