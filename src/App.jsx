import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './App.scss';

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
        <div className='root-container'>
          <Sidebar userType={userType} routes={routes} />
          <Main routes={routes} />
        </div>
      </Router>
    );
  }
}

export default App;
