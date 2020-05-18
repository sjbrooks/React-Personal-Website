/** Sarah Brooks Personal Website main application.
 *
 * Props: (none)
 *
 * State: (none)
 * 
 * Children: NavBar and Routes components
 */

import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
