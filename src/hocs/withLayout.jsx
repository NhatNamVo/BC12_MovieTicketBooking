import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import './withLayout.scss';
const withLayout = WrappedComponent => {
  
  return ({ component: Component, isPrivate, ...props }) => {
    const currentUser = useSelector((state)=> state.authUserReducer.currentUser);
    const content = (<Route
      {...props}
      render={routeProps => (
        <WrappedComponent>
          <Component {...routeProps}/>
        </WrappedComponent>
      )}
    />);
    if(isPrivate){
      if(!!currentUser){
        return content;
      }
      return (
        <Redirect to="/login"/>
      )
    }
    else{
      return content;
    }
  };
};

export default withLayout;