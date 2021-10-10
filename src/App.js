import React from 'react';
import {Route, Switch} from 'react-router-dom';
import "mockApi";

import {SETTINGS} from "constants/routes";

import StartPage from "pages/StartPage";
import HistoryPage from "pages/HistoryPage";
import SettingsPage from "pages/SettingsPage";

import {useRepositoryState} from "./contexts/RepositoryProvider";

function App() {
  const {repository} = useRepositoryState();

  return (
    <Switch>
      <Route exact={true} path={SETTINGS} component={SettingsPage}/>
      {!!repository && <Route path="/" component={HistoryPage}/>}}
      <Route path="/" component={StartPage}/>
    </Switch>
  );
}

export default App;