import React from 'react';

import './custom.button.style.scss';

const CustomButton = ({ children, isGoogleBtn, ...otherProps }) => (
  <button
    className={`${isGoogleBtn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
