import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Create the context
const GlobalStateContext = createContext(null);

// Hook to use the global state
export function useGlobalState() {
  return useContext(GlobalStateContext);
}

// GlobalStateProvider component
export function GlobalStateProvider({ children }) {
  const [expand, setExpand] = useState(true);


  return (
    <GlobalStateContext.Provider value={{ expand, setExpand,}}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// PropTypes validation for children
GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
