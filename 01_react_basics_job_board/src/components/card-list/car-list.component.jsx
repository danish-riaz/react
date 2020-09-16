import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = ({ users }) => {
  return (
    <div className="card">
      {users.map((user) => (
        <Card
          name={user.name}
          key={user.id}
          id={user.id}
          username={user.username}
          phone={user.phone}
        />
      ))}
    </div>
  );
};
