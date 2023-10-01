import { createContext, useReducer } from "react"; //createContext: This function is used to create a new context object.
//useReducer: A React hook for (managing state) and actions using a (reducer function).
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  // INITIAL_STATE: It defines an initial (state object) for the dark mode context.
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE); //This line creates a (context object) using createContext.
//This context object will be used to( pass the dark mode (state) and (dispatch function) down the component tree) so that child components can (access and modify the dark mode state).

export const DarkModeContextProvider = ({ children }) => {
  //This is a custom component that serves as the provider for the dark mode context.
  //children prop, which represents the child components that will be (wrapped) by this provider.

  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  //useReducer hook to (initialize the state) and (provide a dispatch function).
  //DarkModeReducer is the reducer function responsible for handling state transitions.

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
// Setting All Application to  </DarkModeContextProvider> in Index.js
