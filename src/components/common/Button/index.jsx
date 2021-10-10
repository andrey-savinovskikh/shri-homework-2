import React from 'react';

import {classname} from "utils/classname";

import './styles.scss';

const cls = classname("Button");

const Button = ({
  children,
  icon,
  mods = {},
  ...props
}) => {
  return (
    <button
      className={cls({...mods})}
      {...props}
    >
      {
        !!icon &&
          <span className={cls("icon")}>
            {icon}
          </span>
      }

      {
        !!children &&
          <span className={cls("text")}>
            {children}
          </span>
      }

    </button>
  )
}

Button.defaultProps = {
  mods: {adapt: "default"}
};

export default Button;