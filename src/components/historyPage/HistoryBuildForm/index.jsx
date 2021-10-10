import React from "react";
import {useFormik} from "formik";

import {classname} from "utils/classname";

import Input from "components/common/Input";
import Button from "components/common/Button";

import './styles.scss';

const cls = classname('HistoryBuildForm');

const HistoryBuildForm = ({mods, cancelHandler}) => {
  const formik = useFormik({
    initialValues: {
      hash: ''
    }
  })

  return (
    <div className={cls({...mods})}>
      <div className={cls("title")}>New build</div>

      <form className={cls("form")}>
        <div className={cls("input")}>
          <Input
            id="hash"
            name="hash"
            label="Enter the commit hash which you want to build."
            type="text"
            placeholder="Commit hash"
            error={formik.errors.repository}
            onChange={formik.handleChange}
            value={formik.values.hash}
            resetField={() => formik.setFieldValue("hash", "")}
          />
        </div>

        <div className={cls("buttons")}>
          <div className={cls("button")}>
            <Button
              type="submit"
              mods={{theme: "yellow", width: "responsive"}}
              onClick={formik.handleSubmit}
            >
              Run build
            </Button>
          </div>

          <div className={cls("button")}>
            <Button
              mods={{width: "responsive"}}
              onClick={cancelHandler}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

HistoryBuildForm.defaultProps = {
  mods: {adapt: "default"},
  cancelHandler: () => {}
};

export default HistoryBuildForm;