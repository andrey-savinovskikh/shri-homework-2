import React from "react";
import * as Yup from 'yup';
import {useFormik} from "formik";

import {classname} from "utils/classname";

import Input from "components/common/Input";
import Button from "components/common/Button";

import './styles.scss';

const SettingsFormSchema = Yup.object().shape({
  repository: Yup.string()
    .required('Required Field'),
  buildCommand: Yup.string()
    .required('Required Field'),
  sync: Yup.number()
      .typeError('Enter a number')
 })

const cls = classname('SettingsForm');

const SettingsForm = ({
  mods,
  successHandler,
  isLoading,
  error,
  repository
}) => {
  const formik = useFormik({
    initialValues: {
      repository: repository,
      buildCommand: '',
      mainBranch: '',
      sync: ''
    },
    validationSchema: SettingsFormSchema,
    validateOnChange: false,
    onSubmit: values => {
      successHandler(values)
    },
  })

  return (
    <div className={cls({...mods})}>
      <div className={cls("title")}>Settings</div>
      <div className={cls("subtitle")}>Configure repository connection and synchronization settings.</div>

      <form className={cls("form")}>
        <div className={cls("input")}>
          <Input
            id="repository"
            name="repository"
            label="GitHub repository"
            type="text"
            isRequired={true}
            placeholder="user-name/repo-name"
            error={formik.errors.repository}
            onChange={formik.handleChange}
            value={formik.values.repository}
            resetField={() => formik.setFieldValue("repository", "")}
          />
        </div>

        <div className={cls("input")}>
          <Input
            id="buildCommand"
            name="buildCommand"
            label="Build command"
            type="text"
            isRequired={true}
            placeholder="rm -rf /"
            error={formik.errors.buildCommand}
            onChange={formik.handleChange}
            value={formik.values.buildCommand}
            resetField={() => formik.setFieldValue("buildCommand", "")}
          />
        </div>

        <div className={cls("input")}>
          <Input
            id="mainBranch"
            name="mainBranch"
            label="Main branch"
            type="text"
            placeholder="master"
            error={formik.errors.mainBranch}
            onChange={formik.handleChange}
            value={formik.values.mainBranch}
            resetField={() => formik.setFieldValue("mainBranch", "")}
          />
        </div>

        <div className={cls("sync")}>
          <Input
            id="sync"
            name="sync"
            label="Synchronize every"
            type="text"
            placeholder="10"
            error={formik.errors.sync}
            onChange={(e) => handleSyncChange(e)}
            value={formik.values.sync}
            resetField={() => formik.setFieldValue("sync", "")}
            mods={{"with-units": true}}
            units="minutes"
            isUseClearBtn={false}
          />
        </div>

        <div className={cls("buttons")}>
          <div className={cls("button")}>
            <Button
              type="submit"
              mods={{theme: "yellow", width: "responsive"}}
              onClick={formik.handleSubmit}
              disabled={isLoading}
            >
              Save
            </Button>
          </div>

          <div className={cls("button")}>
            <Button
              mods={{width: "responsive"}}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </div>

        {
          !!error &&
            <div className={cls("error")}>{error}</div>
        }
      </form>
    </div>
  );

  function handleSyncChange(e) {
    e.preventDefault();

    const { value } = e.target;
    const regex = /^\d*$/;

    if (regex.test(value.toString())) {
      formik.setFieldValue("sync", value);
    }
  }
};

SettingsForm.defaultProps = {
  mods: {adapt: "default"},
};

export default SettingsForm;
