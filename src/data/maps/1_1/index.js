const tiles = [
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
  [0, 0, 0, 0, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5],
  [20, 0, 0, 4, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5],
  [5, 5, 9, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 3, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5],
  [5, 0, 4, 0, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5],
  [5, 0, 0, 0, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5],
  [5, 0, 0, 0, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 1, 5, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5],
  [5, 1, 5, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 1, 5, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 5],
  [5, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

const monsters = [
  {
    type: 'rat',
    position: [ 6, 5 ]
  },
  {
    type: 'rat',
    position: [ 5, 4 ]
  },
  {
    type: 'rat',
    position: [ 10, 11 ]
  },
  {
    type: 'rat',
    position: [ 12, 13 ]
  },
  {
    type: 'rat',
    position: [ 13, 10 ]
  },
  {
    type: 'rat',
    position: [ 10, 4 ]
  },
  {
    type: 'rat',
    position: [ 12, 3 ]
  }
];

const stairs = {
  up: '1_2'
}

export default {
  tiles,
  monsters,
  stairs
};
