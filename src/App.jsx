import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Calendario from './components/calendario';

class App extends React.Component {
  state = {
    userType: 0,
    routes: [
      {
        id: 'home',
        path: '/',
        exact: true,
        name: 'Home',
        component: () => <h1>Welcome</h1>,
      },
      {
        id: 'agendarCita',
        path: '/book',
        name: 'Agendar cita',
        component: () => <h1>Agendar cita</h1>,
      },
      {
        id: 'agregarVet',
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
        <li key={`sidebar-${route.id}`}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  userType: PropTypes.number.isRequired,
  routes: PropTypes.array.isRequired,
};

class Main extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      month: 10,
      year: 2018,
    };
    this.onMonthChanged = this.onMonthChanged.bind(this);
    this.onYearChanged = this.onYearChanged.bind(this);
  }

  onMonthChanged(e) {
    this.setState({ month: parseInt(e.target.value, 0) });
  }

  onYearChanged(e) {
    this.setState({ year: parseInt(e.target.value, 0) });
  }

  render() {
    const { month, year } = this.state;

    return (
      <div style={{ flex: 1 }}>
        {this.props.routes.map(route => (
            <Route
              key={`main-${route.id}`}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
        ))}
        <input type="number" min={0} max={11} value={month} onChange={this.onMonthChanged} />
        <input type="number" min={2018} max={2020} value={year} onChange={this.onYearChanged} />
        <Calendario month={month} year={year} />
      </div>
    );
  }
}

Main.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default App;
