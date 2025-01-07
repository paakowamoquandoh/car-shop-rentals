import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  client: JSON.parse(localStorage.getItem("client")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        client: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        client: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        client: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        client: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("client", JSON.stringify(state.client));
  }, [state.client]);

  return (
    <AuthContext.Provider
      value={{
        client: state.client,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};