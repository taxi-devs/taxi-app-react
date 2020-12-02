import { Route, Redirect } from "react-router-dom";

export const AdminAccess = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export const AdminRoutes = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{ pathname: "/admin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: "/book", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
export const ProtectedBookingRoute = ({
  auth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
