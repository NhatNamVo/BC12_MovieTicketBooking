import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { adminRoutes, clientRoutes } from 'routes';
// import AdminInfo from 'containers/admin/Home/AdminInfo';
// import UserAcount from 'containers/admin/UserAccount/UserAcount';
>>>>>>> 02e9caeae5ed14be429b10d99e7fbcde2ea19d2b

function App() {
  const renderRoutes = (routes) => {
    return routes.map((route) => {
      const { path, component, exact } = route;
      return <Route path={path} component={component} exact={exact} />;
    });
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {renderRoutes(clientRoutes)}
          {/* {renderRoutes(adminRoutes)} */}
          <Route path="*" component={PageNotFound} />
        </Switch>
<<<<<<< HEAD
        
=======
        {/* <AdminInfo/> */}
        {/* <UserAcount/>cle */}
        {/* <UserAcount/> */}
      </Router>
    </div>
  );
}

export default App;
