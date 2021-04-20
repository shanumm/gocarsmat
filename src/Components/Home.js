import React from "react";
import Nav from "./Nav";
import ImageCorousel from "./ImageCorousel";
import HomeContent from "./HomeContent";
import Blog from "./Blog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function Home() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/" exact component={HomeContent} />
          <Route path="/blog" exact component={Blog} /> */}
        </Switch>
      </div>
    </Router>
  );
}
