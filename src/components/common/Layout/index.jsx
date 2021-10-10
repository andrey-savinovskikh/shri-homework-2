import React from 'react';

import {classname} from "utils/classname";

import Header from "components/common/Header";
import Footer from "components/common/Footer";

import './styles.scss';

const cls = classname('Layout');

const Layout = ({
  pageMods,
  headerComponent= <Header/>,
  headerMods,
  footerComponent= <Footer/>,
  footerMods,
  children
}) => {
  return (
    <div className={cls(pageMods)}>
      <div className={cls('container')}>
        {
          headerComponent &&
            <header className={cls('header', headerMods)}>
              {headerComponent}
            </header>
        }

        <div className={cls('content')}>
          <main className={cls('main')}>
            {children}
          </main>
        </div>

        {
          footerComponent &&
            <footer className={cls('footer', footerMods)}>
              {footerComponent}
            </footer>
        }
      </div>
    </div>
  );
};

export default Layout;