import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {SETTINGS} from "constants/routes";
import {getHistory} from "adapters/historyPageAdapter";

import Button from "components/common/Button";

import useCustomModal from "components/common/CustomModal/useCustomModal";
import {useRepositoryState} from "../../../contexts/RepositoryProvider";

import {ReactComponent as PlayIcon} from "../../../resources/images/play.svg";
import {ReactComponent as CogIcon} from "../../../resources/images/cog.svg";

const useHistoryController = () => {
  const {isOpened, closeModal, openModal} = useCustomModal(false);

  const {repository} = useRepositoryState();

  const [cursor, setCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setList] = useState(null);

  useEffect(() => {
    getHistory({count: 10}).then((res) => {
      const {list, cursor} = res.data;

      setList(list);
      setCursor(cursor)
    });
  }, []);

  const loadMore = (cursor) => {
    setIsLoading(true);

    getHistory({cursor, count: 10}).then((res) => {
      const {list, cursor} = res.data;

      setList((state) => [...state, ...list]);
      setCursor(cursor);
      setIsLoading(false);
    });
  }

  const buttons = getButtonsData(openModal);

  const headerData = {
    buttons: buttons,
    title: repository,
    titleMods: {color: "black"}
  }

  return {
    modal: {isOpened, closeModal, openModal},
    history,
    headerData,
    isLoading,
    loadMore,
    cursor
  }
};

const getButtonsData = (openModal) => {
  return [
    {
      id: "run-build",
      component: (
        <Button
          icon={<PlayIcon/>}
          mods={{size: "sm", adapt: "with-icon"}}
          onClick={() => openModal()}
        >
          Run build
        </Button>
      )
    },
    {
      id: "settings",
      component: (
        <Link to={SETTINGS}>
          <Button
            icon={<CogIcon/>}
            mods={{size: "sm", "only-icon": true, adapt: "with-icon"}}
          />
        </Link>
      )
    }
  ]
}

export default useHistoryController;