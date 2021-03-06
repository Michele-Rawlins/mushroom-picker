const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Golden Chanterelle',
    description: 'Trumpet-like, with a depression in the center of its cap.  Golden-hued, fleshy and firm with an apricot scent.',
    imgUrl: 'https://images.unsplash.com/photo-1577186606264-8bc8d1fdf9e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Wood Blewit',
    description: 'Wood Blewits are bluish.  They grow in leaf litter and mixed woodland and under hedgerows.  They can be used to dye fabrics.',
    imgUrl: 'https://images.unsplash.com/photo-1499343162160-cd1441923dd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Wolf Mushroom',
    description: 'Wood Blewits are bluish.  They grow in leaf litter and mixed woodland and under hedgerows.  They can be used to dye fabrics.',
    imgUrl: 'https://images.unsplash.com/photo-1578571021992-497d76208d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Portobello Mushroom',
    // eslint-disable-next-line max-len
    description: 'Agaricus bisporus is native to grasslands in Europe and North America.   They are edible and used in a variety of cooking applications.  They are a nutritional powerhouse. The Portobello is the white button mushroom, all grown up.',
    imgUrl: 'https://images.unsplash.com/photo-1555726698-eac5b44423fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Button Mushroom',
    // eslint-disable-next-line max-len
    description: 'Agaricus bisporus is native to grasslands in Europe and North America.   They are edible and used in a variety of cooking applications.  They are a nutritional powerhouse.  The white button is the young version of this species of mushroom.',
    imgUrl: 'https://images.unsplash.com/photo-1516044437274-60c4b8e9fceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Destroying Angels',
    // eslint-disable-next-line max-len
    description: 'This mushroom is similar to the button mushroom and is very toxic. If ingested, this mushroom can cause vomiting, delirium, convulsions, liver and kidney failure and often death. This is the dealiest mushroom in North America.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/08/5508-004-E3F081AB/angel.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Magic Mushroom',
    // eslint-disable-next-line max-len
    description: 'This mushroom is also known as psilocybin.  It serves no medicinal benefit other than providing feelings of euphoria and sensory distortion.  Mushrooms are not considered to have any addictive properties.',
    // eslint-disable-next-line max-len
    imgUrl: 'data:image/jpeg;base64,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',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'CandleSnuff Mushroom',
    // eslint-disable-next-line max-len
    description: 'This mushroom typically grows in clusters on dying hardwood.  Although, it is not poisonous,its small size and toush texture deter consumption.',
    imgUrl: 'https://images.unsplash.com/photo-1558241047-fd1d23c3df30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Fly Agaric',
    // eslint-disable-next-line max-len
    description: 'This mushroom is recognizable with its bright red cap and white spotws. It is very toxic to humans and pets but ususally is not deadly.',
    imgUrl: 'https://images.unsplash.com/photo-1512595813026-e0ea0dda5b22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Jelly Ear',
    // eslint-disable-next-line max-len
    description: 'This mushroom is used for medicinal purposes to treat sore throat, sore eyes, jaundice and as an astrigent.  It is not widely used in the West but is popular in China.',
    imgUrl: 'https://images.unsplash.com/photo-1555726698-d0b0bb8098ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'DeathCap',
    // eslint-disable-next-line max-len
    description: 'Perhaps the deadliest of all mushrooms, within 6 to 12 hours after being ingested, violent abdobimal pain, vomiting, bloody diarrhea and loss of fluids from tissues.  Most notable deaths caused are Pope Clement in 1534 and Roman Emperor Claudius in 54CE.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/79/145379-050-4461FF66/Death-cap-mushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom12',
    name: 'Oyster Mushroom',
    // eslint-disable-next-line max-len
    description: 'This mushroom was first cultivated in Germany during World War I for food.  It is now grown around the world.',
    imgUrl: 'https://images.unsplash.com/photo-1518967396639-378a1dcc96d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Clamshell Mushroom',
    // eslint-disable-next-line max-len
    description: 'This brown capped mushroom contains a nutty goodness flavor when cooked.  They are slightly bitter if eaten raw.',
    imgUrl: 'https://images.unsplash.com/photo-1567334314101-26f2e7658aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Shaggy Ink Cap',
    // eslint-disable-next-line max-len
    description: 'This mushroom should be consumed before its gills turn black and never with alsohol.  This mushroom digests its own cap. It has been used to treat alcoholism',
    imgUrl: 'https://images.unsplash.com/photo-1546465338-84d1ab4f6cd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Yellow Knight',
    // eslint-disable-next-line max-len
    description: 'Exercise caution when eating this mushroom.  It is edible but should not be eaten  thrice in the same week.  It can lead to posioning. ',
    imgUrl: 'https://images.unsplash.com/photo-1543269068-924a64037726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Common Lawn Mushroom',
    // eslint-disable-next-line max-len
    description: 'The Concocybe Filaris is an innocent looking lawn mushroom but is extremely poisonous and can cause organ failure if ingested.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/94/180794-050-AAD9AE56/mushrooms-lawn-mushroom-Conocybe-filaris-Ingestion-region.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Cambodian Mushroom',
    // eslint-disable-next-line max-len
    description: 'This mushroom is popular among those growing mushroom for its intense effects on visual distortion.',
    imgUrl: 'https://images.unsplash.com/photo-1543270573-ae308aef7fb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Flying Saucer Mushroom',
    // eslint-disable-next-line max-len
    description: 'This mushroom is popular among those growing mushroom for its intense effects on visual distortion.  This mushroom grows on the Northern Coast and is the most potent of psychadelic mushrooms.',
    imgUrl: 'https://entheonation.com/wp-content/uploads/2017/04/Psilocybe_azurescens.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Golden Teacher',
    // eslint-disable-next-line max-len
    description: 'This is the most popular of the psychedelic mushrooms.  These mushrooms grow all over North America and are usually harvested in May and June.',
    imgUrl: 'https://images.unsplash.com/photo-1516044600322-f72f1b84ec86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Meadow Mushroom',
    // eslint-disable-next-line max-len
    description: 'This mushroom is edible and is found all over North America.  They can be found between July and September..',
    imgUrl: 'https://images.unsplash.com/photo-1560801063-95bf25f29e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];


let basket = [];

const getMushroomType = () => {
  const mushroomTypes = basket.map((mushroom) => mushroom.name);
  return mushroomTypes;
};

const removeMushrooms = () => {
  basket = [];
  alert('You picked a deadly mushroom!!!  RIP!!!');
};

const addMushrooms = () => {
  mushrooms.forEach((mushroom) => {
    if (mushroom.isDeadly === false && mushroom.isPoisonous === false && mushroom.isMagic === false) {
      basket.push(mushroom);
    }
  });
  alert('You have picked a magic mushroom, you gain two mushrooms!!  Happy tripping!!');
};

const removeTwoMushrooms = () => {
  basket = getBasket();
  if (basket.length < 2) {
    (basket.splice(0, 1));
    alert('You picked a poisonous mushroom!!  Lose one Mushroom!');
  } else {
    (basket.splice(0, 2));
    alert('You just picked a poisonous Mushroon!!!  Lose two Mushrooms!!!');
  }
};

const getBasket = () => basket;

const getMushrooms = () => mushrooms;

const pickAMushroom = () => {
  const mushroomPicked = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  console.error('mushroompicked', mushroomPicked);
  if (mushroomPicked.isPoisonous === true) {
    // alert('You have picked a poisonous mushroom!!  You lose two mushrooms!!');
    removeTwoMushrooms();
  } else if (mushroomPicked.isDeadly === true) {
    removeMushrooms();
  } else if (mushroomPicked.isMagic) {
    addMushrooms();
  } else {
    basket.push(mushroomPicked);
  }
};

export default {
  getMushrooms,
  getBasket,
  pickAMushroom,
  getMushroomType,
};
