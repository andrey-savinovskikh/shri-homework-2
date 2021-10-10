import React from 'react';
import ReactModal from 'react-modal';

import {classname} from "utils/classname";

import './styles.scss';

const cls = classname("CustomModal")

const CustomModal = ({
  children,
  onRequestClose,
  style = getDefaultStyles(),
  blockMods,
  ...props
}) => {
  return (
    <ReactModal
      ariaHideApp={false}
      style={style}
      onRequestClose={onRequestClose}
      portalClassName={cls()}
      overlayClassName={cls("wrapper")}
      className={cls("inner")}
      bodyOpenClassName={cls("body", {open: true})}
      {...props}
    >
      <div className={cls("content")}>
        {children}
      </div>
    </ReactModal>
  )
}

const getDefaultStyles = () => {
  return {
    content: {
      border: 'none',
      inset: 0,
      paddingTop: "0",
      paddingBottom: "0"
    },
  }
}

export default CustomModal