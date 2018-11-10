import React, { Component } from 'react';
import Nav from './components/navigation/Nav';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/navigation/Footer';
import './App.css';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route render={({ location }) => (
            <div>
              <Nav />  
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/skills' component={Skills} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' render={(props) => (
                    <Contact {...props} onSubmit={fields => this.onSubmit(fields)}/>
                  )}  />
              </Switch>
              <Footer />
            </div>  
          )} />
        </Router>
      </div>
    );
  }
}

export default App;
