// src/components/Playlist.js
import React from 'react';
import Track from './Track.js';

const Playlist = props => {

  let trackOne = <Track title="Tchaikovsky - Mars" playing={false} duration={"4:30"} />;
  let trackTwo = <Track title="San Fermin - Emily" playing={false} duration={"3:40"} />;
  let trackThree = <Track title="Lissie - Record" playing={true} duration={"6:04"} />;

  return(
    <ul className="tracks">
      {trackOne}
      {trackTwo}
      {trackThree}
    </ul>
  );
}

export default Playlist;
