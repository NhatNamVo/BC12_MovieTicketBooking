import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "containers/shared/PageNotFound/PageNotFound";
import Client from "containers/client/Client";
import Admin from "containers/admin/Admin";
import Footer from "components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Client} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
