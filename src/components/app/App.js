import React, { useReducer } from 'react';
import './App.scss';
import { initialState } from '../../services/constants';
import LeadersContext from '../../services/leadersContext';
import accountSetupReducer from '../../services/accountSetupReducer';

import Header from '../Header';
import Sidebar from '../Sidebar';
import AccountSetup from '../account-setup/AccountSetup';
import ProgressBarContainer from '../progressBar/progressBarContainer';

const App = () => {

  const [data, dispatch] = useReducer(accountSetupReducer, initialState);

  return (
    <div className="App">
      <LeadersContext.Provider value={{ data, dispatch }}>
        <Header />
        <div className='content-wrapper'>
          <Sidebar />
          <div className='right-section'>
            <AccountSetup />
            <ProgressBarContainer />
          </div>
        </div>
      </LeadersContext.Provider>
    </div>
  );
}

export default App;
