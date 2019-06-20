import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import a1 from './work/a1'
import a2 from './work/a2'
import Task1 from './Task1/Task1';
import AgeUpDown from './Components/AgeUpDown';
import Task2Component from './Components/Task2Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/a" component={a1}></Route>
          <Route exact path="/a1" component={a2}></Route>
          <Route exact path="/Task1" component={Task1}></Route>
          <Route exact path="/Task" component={AgeUpDown}></Route>
          <Route exact path="/Task2" component={Task2Component}></Route>
        </Switch>
      </Router>        
      </header>
    </div>
  );
}

export default App;
