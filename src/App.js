import React from 'react';
import './App.css';
import Home from './Components/Home'
import Contributors from './Components/Contributors'
import Book from './Components/Book'
import NavBar from './Components/NavBar'
import About from './Components/About'
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contributors" component={Contributors}/>
          <Route exact path="/purchase" component={Book}/>
          <Route exact path="/about" component={About}/>        
        </Switch>
      </header>
    </div>
  );
}

export default App;

