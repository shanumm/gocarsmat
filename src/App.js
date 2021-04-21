import React from "react";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";
import HomeContent from "./Components/HomeContent";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <Router>
      <div>
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={HomeContent} />
            <Route path="/layout" exact component={Layout} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/blog" exacts component={Blog} />
            <Route path="/shop" exacts component={Shop} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}
