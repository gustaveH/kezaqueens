import React from 'react';
import About from './pages/About';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Chat from './pages/Chat';
import NavigationBar from './components/NavigationBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Admin' component={Admin} />
        <Route exact path='/Podcast' component={Podcast} />
        <Route exact path='/Chat' component={Chat} />
      </Switch>
    </>
  );
}

export default App;
