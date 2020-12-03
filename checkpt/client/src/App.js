import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ContactList from './Components/ContactList';
import Add from './Components/Add';
import { Button } from 'semantic-ui-react';
import {useDispatch} from 'react-redux'
import { toggleFalse } from './JS/Actions/Actions';


function App() {
  const dispatch = useDispatch()
  return (
    <dev className="app">
   
    <Link to="/add">
    <Button inverted color='blue' style={{margin: "2% 3px 3% 40%"}} onClick={()=>dispatch(toggleFalse())}>Add Contact</Button>
    </Link>
    <Link to="/">
    <Button inverted color='blue'>Contact List</Button>
    </Link>
    <Switch>
      <Route exact path="/" component={ContactList}/>
      <Route exact path={["/add","/edit/:id"]} component={Add}/>
    </Switch>
    </dev>
  );
}

export default App;
