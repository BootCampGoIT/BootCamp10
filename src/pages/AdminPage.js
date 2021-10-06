import React from "react";
import {
  useHistory,
  useLocation,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "../Components/navigation/Navigation";
import { adminRoutes } from "../routes/adminRoutes";

const AdminPage = ({ match }) => {
  //   const history = useHistory();
  //   const location = useLocation();

  return (
    <>
      <Navigation routes={adminRoutes} match={match.url} />
      {/* <ul className='navList'>
        {adminRoutes.map(({ path, name, exact }) => (
          <li key={path} className='navItem'>
            <NavLink
              to={match.url + path} //  /admin/courses
              className='navLink'
              activeClassName='activeNavLink'
              exact={exact}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul> */}
      <Switch>
        {adminRoutes.map(({ path, component, exact }) => (
          <Route
            path={match.path + path}
            component={component}
            exact={exact}
            key={path}
          />
        ))}
      </Switch>

      {/* <Navigation routes={adminRoutes} /> */}

      {/* <hr />
      <h2>AdminPage</h2>
      <button type='button' onClick={history.goBack}>
        Go back
      </button>
      <button type='button' onClick={history.goForward}>
        Go Forward
      </button>
      <button
        type='button'
        onClick={() =>
          history.push({
            pathname: "/courses",
            hash: "my_hash",
            search: "q=hello",
            state: {
              message: "HEllo",
              from: location.pathname,
            },
          })
        }>
        Push
      </button> */}
    </>
  );
};

export default AdminPage;
