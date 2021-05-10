import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
     <Router>
      <Header />
      <Switch>
        <Route path="/" component={Gallery} aos="fade-up" aos_offset="100" exact />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
