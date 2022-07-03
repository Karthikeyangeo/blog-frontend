import TopBar from "./components/topBar/TopBar";
import Home from "./routes/home/Home";
import Single from "./routes/single/Single";
import Write from "./routes/write/Write";
import Settings from "./routes/settings/Settings";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import {Switch, Route,Redirect } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user}= useContext(Context);
  return (
    <div className="App">
      <TopBar />
      <Switch>
      {/* Each route is case, eg. - case '/about': */}
  
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/register'>
          {user ? <Redirect to= '/' /> : <Register />}
        </Route>

        <Route path='/login'>
          {user ? <Redirect to= '/' /> :<Login />}
        </Route>
        <Route path='/write'>
          {user ? <Write /> : <Redirect to= '/login'/>}
          
        </Route>
        <Route path='/settings'>
          {user ? <Settings /> : <Redirect to= '/login'/>}
        </Route>

        <Route path='/post/:postID'>
          <Single />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
