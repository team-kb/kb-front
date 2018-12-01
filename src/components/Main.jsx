import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Calendario from './Calendario';
import './Main.scss';

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
    const { routes } = this.props;
    const { month, year } = this.state;

    return (
      <div className='main-container'>
        {routes.map(route => (
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

export default Main;
