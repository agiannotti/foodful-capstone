import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

import logo from '../../Images/Convention-logo.png';
import burger from '../../Images/Burger.png';

export default class Main extends Component {
  render() {
    return (
      <>
        <div className='Main'>
          <header className='App-header'>
            <nav>
              <Link to='/directory'>
                <button>
                  <img
                    className='burger-menu'
                    src={burger}
                    alt='menu'
                    width='40px'
                    height='36px'
                  />
                </button>
              </Link>
            </nav>
          </header>
          <section className='main-section'>
            <div>
              <h1>
                <img
                  className='logo-main'
                  src={logo}
                  alt='Logo'
                  width='176px'
                  height='161px'
                />
              </h1>
            </div>
            <h1>Foodful</h1>
            <div className='main-paragraph'>
              <p>Locate free food, or provide a bit of your own.</p>
            </div>
            <div>
              <Link to='/profile'>
                <button className='main-search'>Search</button>
              </Link>
            </div>
          </section>
          <br />
          <section className='middle-section'>
            <div>
              <img
                className='logo-main'
                src={logo}
                alt='Logo'
                width='176px'
                height='161px'
              />
              <div className='main-paragraph'>
                <p>
                  Foodful aims to unify communities by creating a platform for
                  people to share their resources.
                </p>
              </div>
            </div>
            <div>
              <img
                className='logo-main'
                src={logo}
                alt='Logo'
                width='176px'
                height='161px'
              />
              <div className='main-paragraph'>
                <p>
                  If you're hungry, or you need to feed your family, you can use
                  this app to search for free food supplies within your
                  community.
                </p>
              </div>
            </div>
          </section>
          <section className='bottom-section'>
            <div>
              <img
                className='logo-main'
                src={logo}
                alt='Logo'
                width='176px'
                height='161px'
              />
              <div className='main-paragraph'>
                <p>
                  If you'd like to donate food or resources to those in your
                  area that may need help, Foodful can allow you to search for
                  nearby food banks, drives, and user-created "supply drop"
                  locations.
                </p>
              </div>
            </div>
            <div>
              <img
                className='logo-main'
                src={logo}
                alt='Logo'
                width='176px'
                height='161px'
              />
              <div className='main-paragraph'>
                <p>
                  Mark a location on our map to signal a location that is
                  currently providing resources.
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
