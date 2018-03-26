import React from 'react';

const Track = props => {
  let icon;
  if(props.playing) {
    icon = <i className="fa fa-pause-circle-o" />;
  } else {
    icon = <i className="fa fa-play-circle-o" />;
  }

  return(
    <li className="track">
      {icon}
      <span className="title">{props.title}</span>
      <span className="duration">{props.duration}</span>
    </li>
  );
}

export default Track;
