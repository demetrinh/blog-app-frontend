import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllBlogPosts from "./routes/AllBlogPosts";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <AllBlogPosts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
