import React from 'react';

import {classname} from "utils/classname";

import Layout from "components/common/Layout";
import Header from "components/common/Header";
import StartMessage from "../StartMessage";

import useStartController from "./controller";

import './styles.scss';

const cls = classname('Start');

const Start = () => {
  const {headerData} = useStartController();

  return (
    <Layout
        headerComponent={<Header {...headerData}/>}
    >
      <div className={cls('', ['container'])}>
        <div className={cls("message")}>
          <StartMessage/>
        </div>
      </div>
    </Layout>
  );
};

export default Start;