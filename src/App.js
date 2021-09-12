import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "containers/shared/PageNotFound/PageNotFound";
import Client from "containers/client/Client";
import Admin from "containers/admin/Admin";
import Footer from "components/Footer/Footer";
import Login from "containers/shared/Auth/Login/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Client} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
