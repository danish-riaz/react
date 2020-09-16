import React from 'react';
import './card.styles.css';

export const Card = ({ name, username, id }) => {
  return (
    <div className="indCard">
      <img
        src={`https://robohash.org/${id}?set=set5&size=180x180`}
        alt="Profile Img"
      />
      <h2>{name}</h2>
      <p>@{username}</p>
      <button className="profileBtn">Profile</button>
    </div>
  );
};
