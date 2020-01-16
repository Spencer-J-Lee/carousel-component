import React, { Component } from 'react';
import Slider from './Slider/Slider';
import Button from '../Button/Button';
import classes from './Carousel.module.css';
import posts from '../../assets/posts';

class Carousel extends Component {
  state = {
    objects: posts,
    activeItem: posts[0],
  };

  nextItemHandler = () => {
    const nextId = this.state.activeItem.id + 1;
    if (!this.state.objects[nextId]) {
      return;
    }
    this.setState(prevState => {
      return { activeItem: prevState.objects[nextId] }
    });
  }

  prevItemHandler = () => {
    const nextId = this.state.activeItem.id - 1;
    if (!this.state.objects[nextId]) {
      return;
    }
    this.setState(prevState => {
      return { activeItem: prevState.objects[nextId] }
    });
  }

  itemClickedHandler = (item) => {
    this.setState({ activeItem: item })
  }

  render() {
    return (
      <div className={classes.Carousel}>
        <div className={classes.ButtonsWrapper}>
          <Button clicked={this.prevItemHandler}>←</Button>
          <Button clicked={this.nextItemHandler}>→</Button>
        </div>
        <Slider 
          sliderItems={this.state.objects} 
          activeItem={this.state.activeItem}
          itemClicked={this.itemClickedHandler}/>
      </div>
    )
  }
}

export default Carousel;
