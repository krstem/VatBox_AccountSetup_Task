import React, { useReducer } from 'react';
import './App.css';
import { initialState } from '../../services/constants';
import LeadersContext from '../../services/leadersContext';
import accountSetupReducer from '../../services/accountSetupReducer';
import Sidebar from '../Sidebar';

import Header from '../Header';
import AccountSetup from '../account-setup/AccountSetup';
import EntityGrid from '../Grid/EntityGrid';

const App = () => {

  const [data, dispatch] = useReducer(accountSetupReducer, initialState);

  return (
    <div className="App">
      <LeadersContext.Provider value={{ data, dispatch }}>
      <Sidebar />
        <Header />
          <AccountSetup />
          <EntityGrid />
      </LeadersContext.Provider>
    </div>
  );
}

export default App;
