import * as React from 'react';
import { Link } from 'react-router-dom';
import { BackButton } from './BackButton';

export const AppHeader: React.SFC = () => (
  <header className="app-header">
    <BackButton />
    <div className="app-title">Testing Hub</div>
    <nav className="main-nav">
      <ul>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/note">Note</Link>
        </li>
      </ul>
    </nav>
  </header>
);
