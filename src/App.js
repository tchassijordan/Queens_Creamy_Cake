import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./assets/frontend/Home/HomePage";
import Store from "./assets/frontend/Store/Store";
import Cakes from "./assets/frontend/Store/Cakes";
import Packs from "./assets/frontend/Store/Packs";
import ContactPage from "./assets/frontend/Contact/ContactPage";
import AboutPage from "./assets/frontend/About/AboutPage";
import NavBar from "./assets/frontend/GeneralComponents/Nav/NavBar";
import Footer from "./assets/frontend/GeneralComponents/Footer/Footer";
import DetailedItem from "./assets/frontend/Store/DetailedItem";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/store" component={Store} exact />
          <Route path="/store/cakes" component={Cakes} exact />
          <Route path="/store/:params/:id" component={DetailedItem} />
          <Route path="/store/packs" component={Packs} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
