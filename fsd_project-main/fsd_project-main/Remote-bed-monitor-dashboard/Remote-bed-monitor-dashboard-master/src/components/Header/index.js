import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AiOutlineHome, AiOutlineBarChart, AiOutlineHistory } from 'react-icons/ai';
import { sensorCheckData } from '../../actions';

import { DASHBOARD_NAME, MINUTES_TO_EXPIRE } from 'settings';
import coppeImg from '../../assets/coppe.png';

import './styles.css';

const Header = ({ sensorCheckData }) => {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      sensorCheckData(MINUTES_TO_EXPIRE * 60 * 1000);
      setClock(new Date().toLocaleTimeString('pt-BR'));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <header className="header-container">
      <div className="content">
        <h1>{DASHBOARD_NAME}</h1>
      </div>
      <div className="left-items-container">
        <img src={coppeImg} alt="coppe" />
        <div className="left-button-container">
          <Link className="button-link" to="/" title="Home Page">
            <AiOutlineHome size={32} />
          </Link>
          <Link className="button-link" to="/charts" title="Bar Chart">
            <AiOutlineBarChart size={32} />
          </Link>
          <Link className="button-link" to="/reports" title="Vital Signs Report">
            <AiOutlineHistory size={32} />
          </Link>
        </div>
      </div>
      <div className="clock-container">
        <h2>{clock}</h2>
      </div>
    </header>
  );
};

export default connect(null, { sensorCheckData })(Header);
