import React from 'react';

import {classname} from "utils/classname";
import useSettingsController from "./controller";

import Layout from "components/common/Layout";
import SettingsForm from "../SettingsForm";

import './styles.scss';

const cls = classname('Settings');

const Settings = ({mods}) => {
  const {setRepository, error, isLoading, repository} = useSettingsController();

  return (
    <Layout>
      <div className={cls({...mods}, ['container'])}>
        <div className={cls("form")}>
          <SettingsForm
            successHandler={setRepository}
            error={error}
            isLoading={isLoading}
            repository={repository}
          />
        </div>
      </div>
    </Layout>
  );
};

Settings.defaultProps = {
  mods: {adapt: "default"},
};

export default Settings;