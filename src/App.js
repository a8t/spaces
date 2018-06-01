import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SpaceListPage from './Components/SpaceList/SpaceListPage';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/spaces" component={SpaceListPage} />
        <Route exact path="/" component={SpaceListPage} />
      </div>
    </Router>
  );
};

export default App;
