import React from 'react';
import Carousel from './components/Carousel/Carousel';
import Logo from './components/Logo/Logo';
import logo from './assets/carousel.png';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <section>
        <Logo src={logo} alt="carousel"/>
        <div className={classes.Title}>Carousel</div>
      </section>
      <Carousel />
    </div>
  );
}

export default App;
