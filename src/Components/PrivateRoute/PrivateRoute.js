import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { CustomerContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [loggedInUser,setLoggedInUser] = useContext(CustomerContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.customerEmail ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;