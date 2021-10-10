import React from 'react';

import {classname} from "utils/classname";

import './styles.scss'

const cls = classname('Footer');

const Footer = ({mods}) => {
  return (
    <div className={cls({...mods})}>
      <div className={cls('container', ['container'])}>
        <div className={cls("row")}>
          <div className={cls("col")}>
            <div className={cls('links')}>
              <a href="/" className={cls('link')}>Support</a>
              <a href="/" className={cls('link')}>Learning</a>
              <a href="/" className={cls('link')}>Русская версия</a>
            </div>
          </div>

          <div className={cls("col")}>
            <div className={cls('copyright')}>© 2020 Your Name</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  mods: {adapt: "default"}
};

export default Footer;