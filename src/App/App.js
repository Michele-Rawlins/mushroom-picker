import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';


class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],

  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  pickMushroomEvent = (e) => {
    e.preventDefault();
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }


  render() {
    const { mushrooms, basket } = this.state;
    return (
      <div className="App">
       <h2>Mushrooms</h2>
        <button className="mushroom-picker" onClick={this.pickMushroomEvent}>Pick a Mushroom</button>
        <div className ="row">
          <div className="col-6">
        <Forest mushrooms={mushrooms}/>
        </div>
        <div className="col-6">
        <Basket mushrooms={basket}/>
        </div>
        </div>
        </div>
    );
  }
}

export default App;
