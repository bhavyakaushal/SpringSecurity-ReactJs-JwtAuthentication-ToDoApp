import React from 'react'
import Login from './Components/Login';
import ToDoApp from './Components/ToDoApp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './Components/Register';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path={["/","/login"]} exact component = {Login} ></Route>
        <Route path="/register" exact component = {Register} ></Route>
        <Route path="/todo" exact component = {ToDoApp} ></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
