import React from 'react';
import { Link } from 'react-router-dom';
import './FoodfulListPage.css';

export default function FoodfulListPage() {
  return (
    <div className='ListPage'>
      <nav>
        <nav className='list-nav'>
          <Link to='/'>Home</Link>
          <Link to='/mission'>Mission</Link>
          <Link to='/list'>Locate Resources</Link>
          <Link to='/help'>Help</Link>
        </nav>
      </nav>
    </div>
  );
}
