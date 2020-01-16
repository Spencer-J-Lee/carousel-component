import React from 'react';
import SliderItem from './SliderItem/SliderItem';
import classes from './Slider.module.css'

const slider = props => {
  const sliderItems = props.sliderItems.map(sliderItem => 
    <SliderItem
      key={sliderItem.id} 
      sliderItem={sliderItem} 
      clicked={props.itemClicked}
      active={props.activeItem.id === sliderItem.id}/>
  );
  const xAdjustment = (props.activeItem.id) * (100 / props.sliderItems.length);
  const wrapperStyle = { transform: `translateX(-${xAdjustment}%)`};

  return (
    <div className={classes.SliderWrapper} style={wrapperStyle}>
      {sliderItems}
    </div>
  )
}

export default slider;
