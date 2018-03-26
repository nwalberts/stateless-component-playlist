import React from 'react';
import ReactDOM from 'react-dom';

import Playlist from './Playlist.js';

const data = [
  { id: 1, title: "Ben Rector - Note to Self", playing: false, duration: "3:02" },
  { id: 2, title: "Dan Mangan - Basket", playing: false, duration: "3:52" },
  { id: 3, title: "John Mayer - Gravity", playing: true, duration: "4:06" }
];

ReactDOM.render(
  <Playlist data={data} />,
  document.getElementById('app')
);
