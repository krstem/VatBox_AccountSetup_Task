import React, { useReducer } from 'react';
import './App.css';
import { initialState } from '../../services/constants';
import LeadersContext from '../../services/leadersContext';
import accountSetupReducer from '../../services/accountSetupReducer';

import Header from '../Header';
import AccountSetup from '../account-setup/AccountSetup';

const App = () => {

  const [data, dispatch] = useReducer(accountSetupReducer, initialState);

  return (
    <div className="App">
      <LeadersContext.Provider value={{ data, dispatch }}>
        <Header />
        <AccountSetup />
      </LeadersContext.Provider>
    </div>
  );
}

export default App;
