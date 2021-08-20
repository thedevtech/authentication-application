import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Dashboard from "./Pages/dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
