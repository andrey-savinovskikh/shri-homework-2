import React from 'react';

import {classname} from "utils/classname";

import './styles.scss';

import {ReactComponent as ClearIcon} from "resources/images/close.svg";

const cls = classname('Input');

const Input = ({
  mods,
  id,
  label,
  error,
  value,
  units,
  mask,
  isUseClearBtn,
  isRequired,
  resetField,
  ...rest
}) => {
  const isShowClearBtn = isUseClearBtn && value !== "";

  const allMods = {
    ...mods,
    "with-clear": isShowClearBtn,
    error: !!error
  }

  return (
    <div className={cls({...allMods})}>
      {
        !!label &&
          <label htmlFor={id} className={cls('label')}>
            {label}

            {isRequired && <span className={cls('required')}> *</span>}
          </label>
      }

      <div className={cls("wrap")}>
        <input
            id={id}
            className={cls('input')}
            value={value}
            {...rest}
        />

        {
          isShowClearBtn && value !== "" &&
            <div
                className={cls("clear")}
                onClick={resetField}
            >
              <ClearIcon fill="#CCC"/>
            </div>
        }
      </div>

      {
        !!units && <span className={cls('units')}>{units}</span>
      }

      {
        !!error && <div className={cls('error')}>{error}</div>
      }
    </div>
  );
};

Input.defaultProps = {
  mods: {adapt: "default"},
  isUseClearBtn: true,
  resetField: () => {}
};

export default Input;