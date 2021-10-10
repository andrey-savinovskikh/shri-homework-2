import React, {useEffect} from 'react';

import Start from "components/startPage/Start";

const StartPage = () => {
  useEffect(() => {
    document.title = "CI server"
  }, []);

  return (
    <Start/>
  );
};

export default StartPage;