import React from 'react';

import {classname} from "utils/classname";

import './styles.scss';

const cls = classname('Header');

const Header = ({mods, buttons, title, titleMods}) => {
  return (
    <div className={cls({...mods})}>
      <div className={cls("container", ["container"])}>
        <div className={cls("row")}>
          <div className={cls("col")}>
            <h1 className={cls("title", {...titleMods})}>{title}</h1>
          </div>

          {buttons.length > 0 && renderButtons(buttons)}
        </div>
      </div>
    </div>
  );
};

const renderButtons = (buttons) => {
  return (
      <div className={cls("col")}>
        <div className={cls("buttons")}>
          {
            buttons.map((button) => {
              const {component, id} = button;

              return (
                  <div className={cls("button")} key={id}>
                    {component}
                  </div>
              )
            })
          }
        </div>
      </div>
  )
}

Header.defaultProps = {
  mods: {adapt: "default"},
  buttons: [],
  title: "School CI server",
  titleMods: {}
};

export default Header;