import React from 'react';

import {classname} from "utils/classname";

import HistoryItem from "../HistoryItem";

import "./styles.scss";

const cls = classname('HistoryList');

const HistoryList = ({mods, list}) => {
  return (
    <div className={cls({...mods})}>
      {
        list.map((item) => {
          return (
            <div
              className={cls("item")}
              key={item.id}
            >
              <HistoryItem
                item={item}
              />
            </div>
          )
        })
      }
    </div>
  );
};

HistoryList.defaultProps = {
  mods: {adapt: "default"},
};

export default HistoryList;