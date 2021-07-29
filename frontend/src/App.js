import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Todo from './Todo';
import Edit from './Edit';
import Detail from './Detail'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Todo}/>
        <Route exact path ="/create" component={Todo}/>
        <Route exact path ="/detail/:id" component={Detail}/>
        <Route exact path ="/edit/:id" component={Edit}/>
        <Route exact path ="/delete/:id" component={Todo}/>
      </Switch>
    </Router>
  );
}

export default App;
