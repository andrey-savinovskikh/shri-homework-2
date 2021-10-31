import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {useSelector} from "react-redux";

import {SETTINGS, STATS} from "constants/routes";
import "mockApi";

import StartPage from "pages/StartPage";
import HistoryPage from "pages/HistoryPage";
import SettingsPage from "pages/SettingsPage";
import StatsPage from "pages/StatsPage";

function App() {
  const repository = useSelector((state) => state.settings.repository);

  return (
    <Switch>
      <Route exact={true} path={SETTINGS} component={SettingsPage}/>
      {!!repository && <Route path="/" component={HistoryPage}/>}}
      <Route path={STATS} component={StatsPage}/>
      <Route path="/" component={StartPage}/>
    </Switch>
  );
}

export default App;