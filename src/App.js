import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';
import { Home } from './components/home';
import {ReadGenre} from './components/readGenre'



class App extends Component {




  //allows html in JAVASCRIPT
  render() {

    //return html 
    return (
      <div className="App">
        <Router>



          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Anime FanPge</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Fave Anime</Nav.Link>
              <Nav.Link href="/genre">Genre</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/genre' component={ReadGenre} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/edit/:id' component={Edit}></Route>
          </Switch>



        </Router>

      </div>

    );
  }
}

export default App;
