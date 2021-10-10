import React from 'react';

import {classname} from "utils/classname";

import Layout from "components/common/Layout";
import Header from "components/common/Header";
import CustomModal from "components/common/CustomModal";
import HistoryList from "../HistoryList";
import HistoryBuildForm from "../HistoryBuildForm";
import Button from "components/common/Button";

import useHistoryController from "./controller";

import "./styles.scss";

const cls = classname('History');

const History = ({mods}) => {
  const {modal, history, isLoading, loadMore, cursor, headerData} = useHistoryController();

  return (
    <Layout
      headerComponent={<Header{...headerData}/>}
    >
      <div className={cls({...mods}, ['container'])}>
        {
          history && history.length > 0 &&
            <div className={cls("list")}>
              <HistoryList
                list={history}
                closeModal={modal.closeModal}
              />

              {
                cursor != null &&
                  <div className={cls("button")}>
                    <Button
                      mods={{width: "responsive"}}
                      onClick={() => loadMore(cursor)}
                      disabled={isLoading}
                    >
                      Show more
                    </Button>
                  </div>
              }
            </div>

        }

        <CustomModal
          isOpen={modal.isOpened}
          onRequestClose={modal.closeModal}
        >
          <HistoryBuildForm
            cancelHandler={(e) => {
              e.preventDefault();
              modal.closeModal();
            }}
          />
        </CustomModal>
      </div>
    </Layout>
  );
};

History.defaultProps = {
  mods: {adapt: "default"},
};

export default History;