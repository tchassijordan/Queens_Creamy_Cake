import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import HomePage from "./components/Home/HomePage"
import Store from "./components/Store/Store";
import Cakes from "./components/Store/Cakes";
import Packs from "./components/Store/Packs";
import ContactPage from "./components/Contact/ContactPage"
import AboutPage from "./components/About/AboutPage"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/store">
            <Route path="/store/" exact>
            <Store />
            </Route>
            <Route path="/store/cakes">
              <Cakes />
            </Route>
            <Route path="/store/packs">
              <Packs />
            </Route>
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}