import Header from "components/Header/Header";
import React, { Component } from "react";
import { clientRoutes } from "routes";
import { Route, Switch } from "react-router-dom";
import ModalTrailer from "containers/shared/ModalTrailer/ModalTrailer";
import PageNotFound from "containers/shared/PageNotFound/PageNotFound";
import ClientLayout from "layouts/ClientLayout";
import './Client.scss';
class Client extends Component {
  renderLayout = (routes, Layout) => {
    return routes.map((route) => {
      const { path, component, exact, isPrivate } = route;
      return <Layout path={path} component={component} exact={exact} isPrivate={isPrivate}/>;
    });
  };
  render() {
    const background =
      this.props.location.state && this.props.location.state.background;
    return (
      <div className="movieTicket-content">
        <Switch location={background || this.props.location}>
          {this.renderLayout(clientRoutes, ClientLayout)}
          
          <Route path="*" component={PageNotFound} />
        </Switch>
        {background && (
          <Route path="/trailer/:movieId" component={ModalTrailer} />
        )}
      </div>
    );
  }
}

export default Client;
