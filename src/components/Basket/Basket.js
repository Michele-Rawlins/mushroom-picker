import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';




//add react component//


const buildBasket = (e) => {
  const mushroomId = e.target.closest('.card').id;
     .then((mushroom) => {
  let domString = '';
  domString += '<h2 className="mushroom-basket">Mushroom Basket</h2>'
  domString += `<div className="card cardDisplay" id="${mushroom.id}">`;
  domString += `<img id="envUrl" src="${mushroom.imgUrl}">`;
  domString += `<h2 className="card-title">${mushroom.name}</h2>`;
  domString += `<p className="card-description">${mushroom.description}</p>`;
//add catch//
  
  return domString;
  };
  
  export default buildBasket ;