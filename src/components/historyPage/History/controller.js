import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {SETTINGS} from "constants/routes";
import {getHistory} from "adapters/historyPageAdapter";
import {setHistory, setIsLoading} from "store/historySlice";

import Button from "components/common/Button";

import useCustomModal from "components/common/CustomModal/useCustomModal";

import {ReactComponent as PlayIcon} from "../../../resources/images/play.svg";
import {ReactComponent as CogIcon} from "../../../resources/images/cog.svg";

const useHistoryController = () => {
  const {isOpened, closeModal, openModal} = useCustomModal(false);

  const repository = useSelector((state) => state.settings.repository);
  const {isLoading, history} = useSelector((state) => state.history);
  const dispatch = useDispatch()

  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    getHistory({count: 10}).then((res) => {
      const {list, cursor} = res.data;

      dispatch(setHistory(list));
      setCursor(cursor);
    });
  }, [dispatch]);

  const loadMore = (cursor) => {
    dispatch(setIsLoading(true));

    getHistory({cursor, count: 10}).then((res) => {
      const {list, cursor} = res.data;

      dispatch(setHistory(list));
      dispatch(setIsLoading(false));
      setCursor(cursor);
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