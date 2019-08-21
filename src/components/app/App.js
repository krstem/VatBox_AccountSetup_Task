import React, { useReducer } from 'react';
import './App.css';
import { initialState } from '../../services/constants';
import LeadersContext from '../../services/leadersContext';
import accountSetupReducer from '../../services/accountSetupReducer';

import Header from '../Header';
import AccountSetup from '../account-setup/AccountSetup';
import ProgressBarContainer from '../progressBar/progressBarContainer';

const App = () => {

  const [data, dispatch] = useReducer(accountSetupReducer, initialState);
  import Sidebar from '../Sidebar';

  return (
    <div className="App">
      <LeadersContext.Provider value={{ data, dispatch }}>
        <Header />
        <Sidebar />
        <AccountSetup />
        <ProgressBarContainer />
      </LeadersContext.Provider>
    </div>
  );
}

export default App;
