import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Sidebar.scss';

class Sidebar extends React.Component {
  render() {
    const { userType, routes } = this.props;

    return (
      <div className='sidebar'>
        <div className="sidebar-header">
          <p>Menú {(userType === 1) ? 'Paciente' : 'Clínica'}</p>
        </div>
        <ul>
          {routes.map(route => (
            <li key={`sidebar-${route.id}`}>
              <NavLink exact={route.exact} to={route.path}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  userType: PropTypes.number.isRequired,
  routes: PropTypes.array.isRequired,
};

export default Sidebar;
