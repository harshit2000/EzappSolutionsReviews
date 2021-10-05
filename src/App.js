import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Client from "./Components/Client/Client";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/client">
            <Client />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
