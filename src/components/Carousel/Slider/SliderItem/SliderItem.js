import React from 'react';
import classes from './SliderItem.module.css';

const sliderItem = props => {
  const sliderItemClasses = [classes.SliderItem];

  if (props.active) {
    sliderItemClasses.push(classes.Active);
  };

  return (
    <div className={sliderItemClasses.join(' ')} onClick={() => props.clicked(props.sliderItem)}>
      <div className={classes.Title}>{props.sliderItem.title}</div>
      <div className={classes.Username}>{props.sliderItem.username}</div>
    </div>
  )
}

export default sliderItem;
