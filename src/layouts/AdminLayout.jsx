import AdminFooter from "containers/admin/Footer/AdminFooter";
import AdminHeader from "containers/admin/Header/AdminHeader";
import React, { Component } from "react";
import withLayout from "hocs/withLayout";
class AdminLayout extends Component {
  render() {
    return (
      <>
        <AdminHeader />
        {this.props.children}
        <AdminFooter />
      </>
    );
  }
}

export default withLayout(AdminLayout);
