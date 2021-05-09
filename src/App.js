import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
     <Router>
      <Header />
      <Switch>
        <Route path="/" component={Gallery} exact />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
