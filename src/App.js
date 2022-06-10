import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import './App.css';
import Login from "./Auth/Component/Login";
import SignUp from "./Auth/Component/SignUp";
import Dashboard from "./Dashboard/Component/Dashboard";

function App(){
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path='/' exact>
            <Login/>
          </Route>
          <Route path='/signUp' exact>
            <SignUp/>
          </Route>
          <Route path='/dashboard' exact>
            <Dashboard/>
          </Route>
          <Redirect to='/'/>
        </Switch>
      </Router>
     </div>
  );
}

export default App;
