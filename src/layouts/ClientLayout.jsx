import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import BackToTop from "containers/shared/BackToTop/BackToTop";
import withLayout from "hocs/withLayout";
import React, { Component } from "react";

class ClientLayout extends Component {
  render() {
    
    return (
      <>
      
        <Header />
        <BackToTop/>
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default   withLayout(ClientLayout);
