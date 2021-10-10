import React from 'react';
import {Link} from "react-router-dom";

import {SETTINGS} from "constants/routes";

import Button from "components/common/Button";

import {ReactComponent as CogIcon} from "../../../resources/images/cog.svg";

const useStartController = () => {
  const buttons = getButtonsData();

  const headerData = {
    buttons: buttons,
  }

  return {
    headerData
  }
};

const getButtonsData = () => {
  return [
    {
      id: "settings",
      component: (
        <Link to={SETTINGS}>
          <Button
            icon={<CogIcon/>}
            mods={{size: "sm", adapt: "with-icon"}}
          >
            Settings
          </Button>
        </Link>
      )
    }
  ]
}

export default useStartController;