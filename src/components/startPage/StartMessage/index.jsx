import React from 'react';
import {classname} from "utils/classname";
import {Link} from "react-router-dom";

import {SETTINGS} from "constants/routes";

import Button from "components/common/Button";

import './styles.scss';

import toolsImage from "resources/images/tools.svg";

const cls = classname("StartMessage");

const StartMessage = () => {
  return (
    <div className={cls()}>
      <div className={cls("image-wrap")}>
        <img src={toolsImage} alt="tools"/>
      </div>

      <div className={cls("text")}>
        Configure repository connection and synchronization settings
      </div>

      <div className={cls("button")}>
        <Link to={SETTINGS}>
          <Button
            mods={{theme: "yellow"}}
          >
            Open settings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StartMessage;