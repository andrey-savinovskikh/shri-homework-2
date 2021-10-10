import {useCallback, useState} from 'react';

const useCustomModal = (initialIsOpened) => {
  const [isOpened, setIsOpened] = useState(initialIsOpened);

  const closeModal = useCallback(() => {
    setIsOpened(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpened(true);
  }, []);

  return {
    isOpened,
    closeModal,
    openModal
  }
}

export default useCustomModal;