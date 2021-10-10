import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {setRepository as setRepositoryRequest} from "adapters/settingsPageAdapter";
import {setIsLoading, setError, setRepository} from "store/settingsSlice";

const useSettingsController = () => {
  const {isLoading, error, repository} = useSelector((state) => state.settings);
  const dispatch = useDispatch()

  let history = useHistory();

  const set = (data) => {
    dispatch(setIsLoading(true));
    dispatch(setError(""));

    setRepositoryRequest(data)
      .then((res) => {
        const {repository} = res.data;

        dispatch(setRepository(repository));
        dispatch(setIsLoading(false));

        history.push("/");
      })
      .catch((err) => {
        dispatch(setError(err.message));
        dispatch(setIsLoading(false));
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