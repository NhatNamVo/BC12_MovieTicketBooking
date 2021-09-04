import React from 'react';
import { Route } from 'react-router-dom';

const withLayout = WrappedComponent => {
  return ({ component: Component, ...props }) => (
    <Route
      {...props}
      render={routeProps => (
        <WrappedComponent>
          <Component {...routeProps}/>
        </WrappedComponent>
      )}
    />
  );
};

export default withLayout;