import PageNotFound from "containers/shared/PageNotFound/PageNotFound";
import AdminLayout from "layouts/AdminLayout";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { adminRoutes } from "routes";
import "./admin.scss";
class Admin extends Component {
  renderLayout = (routes, Layout) => {
    return routes.map((route) => {
      const { path, component, exact } = route;
      return <Layout path={path} component={component} exact={exact} />;
    });
  };
  render() {
    if(!this.props.currentUser || this.props.currentUser.maLoaiNguoiDung !== 'QuanTri' ) return (<Redirect to="/"/>);
    return (
      <section className="admin-container">
        <Switch>
          {this.renderLayout(adminRoutes, AdminLayout)}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authUserReducer.currentUser,
})
export default connect(mapStateToProps)(Admin);
