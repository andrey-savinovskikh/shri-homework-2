import React from 'react';

import {classname} from "utils/classname";

import {ReactComponent as SuccessIcon} from "resources/images/check.svg";
import {ReactComponent as DeclineIcon} from "resources/images/close.svg";
import {ReactComponent as WaitIcon} from "resources/images/clock.svg";
import {ReactComponent as CommitIcon} from "resources/images/commit.svg";
import {ReactComponent as PersonIcon} from "resources/images/person.svg";
import {ReactComponent as CalendarIcon} from "resources/images/calendar.svg";
import {ReactComponent as TimeIcon} from "resources/images/time.svg";

import "./styles.scss";

const cls = classname('HistoryItem');

const HistoryItem = ({mods, item}) => {
  const {number, title, branch, hash, contributor, date, time, status} = item;

  const icon = getStatusIcon(status);

  return (
    <div className={cls({...mods, status: status})}>
      <div className={cls("wrap")}>
        {
          !!icon &&
            <div className={cls("status")}>
              {icon}
            </div>
        }

        <div className={cls("row")}>
          <div className={cls("col", {type: "info"})}>
            <div className={cls("info-row")}>
              <span className={cls("info", {type: "number", col: true})}>#{number}</span>
              <span className={cls("info", {type: "title", col: true})}>{title}</span>
            </div>

            <div className={cls("info-row")}>
              <span className={cls("info", {type: "commit", col: true, icon: true})}>
                <span className={cls("icon")}>
                  <CommitIcon fill="rgba(0, 0, 0, .3)"/>
                </span>

                {branch}
              </span>

              <span className={cls("info", {type: "hash", col: true})}>
                {hash}
              </span>

              <span className={cls("info", {type: "contributor", col: true, icon: true})}>
                <span className={cls("icon")}>
                  <PersonIcon fill="rgba(0, 0, 0, .3)"/>
                </span>

                {contributor}
              </span>
            </div>
          </div>

          <div className={cls("col", {type: "time"})}>
            <div className={cls("info", {type: "date", icon: true})}>
              <span className={cls("icon")}>
                <CalendarIcon fill="rgba(0, 0, 0, .3)"/>
              </span>

              {date}
            </div>

            <div className={cls("info", {type: "time", icon: true})}>
              <span className={cls("icon")}>
                <TimeIcon fill="rgba(0, 0, 0, .3)"/>
              </span>

              {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getStatusIcon = (status) => {
  switch (status) {
    case "success":
      return <SuccessIcon
        width={22}
        height={22}
        fill="#00B341"
      />;
    case "decline":
      return <DeclineIcon
        width={22}
        height={22}
        fill="#FF3333"
      />;
    case "wait":
      return <WaitIcon
        width={22}
        height={22}
        fill="#FF9A00"
      />;
    default:
      return null;
  }
}

HistoryItem.defaultProps = {
  mods: {adapt: "default"},
};

export default HistoryItem;