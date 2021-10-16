import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Client from "containers/client/Client";
import Admin from "containers/admin/Admin";
import Login from "containers/shared/Auth/Login/Login";
import Register from "containers/shared/Auth/Register/Register";
import { useDispatch} from "react-redux";
import {actUploadUserLogin} from 'containers/shared/Auth/module/actions';
function App() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const dispatch = useDispatch();
  if(!!userLogin){
    dispatch(actUploadUserLogin(userLogin));
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path='/register' component={Register}/>
          <Route path="/" component={Client} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
