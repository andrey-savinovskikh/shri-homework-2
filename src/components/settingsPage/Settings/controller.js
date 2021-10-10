import {useState} from 'react';
import {useHistory} from "react-router-dom";

import {setRepository} from "adapters/settingsPageAdapter";

import {useRepositoryDispatch, useRepositoryState} from "contexts/RepositoryProvider";

const useSettingsController = () => {
  const {repository} = useRepositoryState();
  const dispatch = useRepositoryDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  let history = useHistory();

  const set = (data) => {
    setIsLoading(true);
    setError("");

    setRepository(data)
      .then((res) => {
        const {repository} = res.data;

        dispatch({type: "set", payload: {repository}})
        setIsLoading(false);
        setError("");

        history.push("/");
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false);
      });
  }

  return {
    isLoading,
    error,
    repository,
    setRepository: set
  }
};

export default useSettingsController;