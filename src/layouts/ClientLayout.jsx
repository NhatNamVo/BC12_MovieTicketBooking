import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Loader from "components/Loader/Loader";
import BackToTop from "containers/shared/BackToTop/BackToTop";
import withLayout from "hocs/withLayout";
import React, { Component } from "react";

class ClientLayout extends Component {
  render() {
    
    return (
      <>
      
        <Header />
        {this.props.children}
        <BackToTop/>
        <Footer />
      </>
    );
  }
}

const mapStateToProps =(state)=>({
  loading: state.movieReducer.loading
})
export default   withLayout(ClientLayout);
