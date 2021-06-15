import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Products,
  Contact
} from "./pages";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        
        <Route path="/about"><About /></Route>
        <Route path="/events"><Events /></Route>
        <Route path="/products"><Products /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/"><Home /></Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
