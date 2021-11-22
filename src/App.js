import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import HomePage from "./assets/Home/HomePage"
import Store from "./assets/Store/Store";
import Cakes from "./assets/Store/Cakes";
import Packs from "./assets/Store/Packs";
import ContactPage from "./assets/Contact/ContactPage"
import AboutPage from "./assets/About/AboutPage"
import NavBar from "./assets/GeneralComponents/Nav/NavBar"
import Footer from "./assets/GeneralComponents/Footer/Footer";
import DetailedItem from "./assets/Store/DetailedItem";

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
          <Route path="/store/cakes/:id" component={DetailedItem} />
          <Route path="/store/packs" component={Packs} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}