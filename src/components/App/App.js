import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FoodfulPage from '../../routes/FoodfulPage/FoodfulPage';
import FoodfulListPage from '../../routes/FoodfulListPage/FoodfulListPage';

function App() {
  return (
    <div className='App'>
      <div className='App__main'>
        <Switch>
          <Route exact path={'/'} component={FoodfulPage} />
          <Route exact path={'/list'} component={FoodfulListPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
