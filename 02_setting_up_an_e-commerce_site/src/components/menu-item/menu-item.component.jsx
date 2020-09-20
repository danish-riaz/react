import React from 'react';
import './menu-item.styles.css';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menuItem ${size}`}>
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="innerContainer">
          <div className="title">{title.toUpperCase()}</div>
          <div className="shopNow">SHOP NOW</div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
