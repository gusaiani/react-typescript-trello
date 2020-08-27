import React, { createContext, useReducer, useContext } from 'react'

type Action =
  | {
      type: 'ADD_LIST',
      payload: string
    }
  | {
      type: 'ADD_TASK',
      payload: { text: string, listId: string }
    }

interface Task {
  id: string,
  text: string
}

interface List {
  id: string,
  text: string,
  tasks: Task[]
}

interface AppState {
  lists: List[]
}

interface AppStateContextProps {
  state: AppState,
  dispatch: React.Dispatch<any>
}

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }]
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }]
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }]
    }
  ]
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch(action.type) {
    case 'ADD_LIST': {
      // Reducer logic here
      return {
        ...state
      }
    }
    case 'ADD_TASK': {
      return {
        ...state
      }
    }
    default: {
      return state
    }
  }
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData)
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
