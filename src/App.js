import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
