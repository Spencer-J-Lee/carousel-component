import React from 'react';
import classes from './Logo.module.css';

const logo = props => {
  return (
    <img 
      src={props.src} 
      alt={props.alt}
      className={classes.Logo}>
    </img>
  )
};

export default logo;
