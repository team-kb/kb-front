import React from 'react';
import PropTypes from 'prop-types';

import './Calendario.scss';


class Calendario extends React.Component {
  days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

  months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  renderHeaders() {
    return this.days.map(day => <div key={`weekday-${day}`} className='header'>{day}</div>);
  }

  renderCells() {
    const { year, month } = this.props;
    const initialDate = new Date(year, month);
    const finalDate = new Date(initialDate.getFullYear(), initialDate.getMonth() + 1, 0);
    const cells = [];

    for (let i = 0; i < initialDate.getDay(); i++) {
      cells.push(<div key={`empty-${i}`}></div>);
    }
    for (let i = 1; i <= finalDate.getDate(); i++) {
      cells.push(<div key={`day-${i}`}>{i}</div>);
    }
    return cells;
  }

  render() {
    return (
      <div>
        <h1>Mes {this.months[this.props.month]}</h1>
        <div className='calendario'>
          {this.renderHeaders()}
          {this.renderCells()}
        </div>
      </div>
    );
  }
}

Calendario.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Calendario;
