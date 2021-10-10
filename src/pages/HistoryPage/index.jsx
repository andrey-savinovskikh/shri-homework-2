import React, {useEffect} from 'react';

import History from "components/historyPage/History";

const HistoryPage = () => {
  useEffect(() => {
    document.title = "CI server - history"
  }, []);

  return (
    <History/>
  );
};

export default HistoryPage;