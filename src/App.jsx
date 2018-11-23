import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    userType: 0,
    routes: [
      {
        path: '/',
        exact: true,
        name: 'Home',
        component: () => <h1>Welcome</h1>,
      },
      {
        path: '/book',
        name: 'Agendar cita',
        component: () => <h1>Agendar cita</h1>,
      },
      {
        path: '/vet',
        name: 'Agregar Veterinario',
        component: () => <h1>Agregar veterinario</h1>,
      },
    ],
  }

  render() {
    const { userType, routes } = this.state;

    return (
      <Router>
        <Root>
          <Sidebar userType={userType} routes={routes} />
          <Main routes={routes} />
        </Root>
      </Router>
    );
  }
}

const Root = props => (
  <div style={{
    display: 'flex',
  }} {...props} />
);

const Sidebar = props => (
  <div style={{ width: '20vw' }}>
    <p>Menú {(props.userType === 1 ? 'Paciente' : 'Clínica')}</p>
    <ul>
      {props.routes.map(route => (
        <li>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Main = props => (
  <div style={{ flex: 1 }}>
    {props.routes.map(route => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
    ))}
  </div>
);

export default App;
