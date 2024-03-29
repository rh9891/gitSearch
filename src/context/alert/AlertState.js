// Initial state for the application.
import React, { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) => {
  const [alert, setAlertState] = useState(null);

  // Sets alert if no search term is provided.
  const setAlert = (msg, type) => {
    setAlertState({ msg, type });
    setTimeout(() => setAlertState(null), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
