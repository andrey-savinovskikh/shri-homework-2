import React from 'react'

const RepositoryStateContext = React.createContext();
const RepositoryDispatchContext = React.createContext();

function repositoryReducer(state, action) {
  switch (action.type) {
    case 'set': {
      const {repository} = action.payload;

      return {repository}
    }

    default: {
      return {...state}
    }
  }
}

function RepositoryProvider({children}) {
  const [state, dispatch] = React.useReducer(repositoryReducer, {repository: ""})

  return (
    <RepositoryStateContext.Provider value={state}>
      <RepositoryDispatchContext.Provider value={dispatch}>
        {children}
      </RepositoryDispatchContext.Provider>
    </RepositoryStateContext.Provider>
  )
}

function useRepositoryState() {
  const context = React.useContext(RepositoryStateContext)

  if (context === undefined) {
    throw new Error('useRepositoryState must be used within a RepositoryProvider')
  }

  return context
}

function useRepositoryDispatch() {
  const context = React.useContext(RepositoryDispatchContext)

  if (context === undefined) {
    throw new Error('useRepositoryDispatch must be used within a RepositoryProvider')
  }

  return context
}

export {RepositoryProvider, useRepositoryState, useRepositoryDispatch}
