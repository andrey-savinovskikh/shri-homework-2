import React, {useEffect} from 'react';

import Settings from "components/settingsPage/Settings";

const SettingsPage = () => {
  useEffect(() => {
    document.title = "CI server - settings"
  }, []);

  return (
    <Settings/>
  );
};

export default SettingsPage;