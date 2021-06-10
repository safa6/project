import "./App.css";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";

const divStyle = {
  ustifyContent: "center",
  width: "80%",
  marginLeft: "10%",
};

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <div style={divStyle} className="App">
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
