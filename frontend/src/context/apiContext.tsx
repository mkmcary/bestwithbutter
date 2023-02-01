import { createContext } from "react";
import axios from "axios";

let instance = axios.create({
  baseURL: "/api",
  headers: {
    Authorization: "Bearer my-token",
  },
});

export const ApiContext = createContext(instance);

type ApiContextProps = {
  children: JSX.Element;
};

function ApiContextProvider({ children }: ApiContextProps) {
  return <ApiContext.Provider value={instance}>{children}</ApiContext.Provider>;
}

export default ApiContextProvider;
