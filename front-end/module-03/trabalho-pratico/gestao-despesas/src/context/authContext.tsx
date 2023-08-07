import React, { useContext } from "react";
import { IUser } from "../types/types";

export interface IAuthContext {
  user: IUser;
  onSignOut: () => void;
}

export const authContext = React.createContext<IAuthContext>({
  user: {
    nome: "Anônimo",
    email: "",
  },
  onSignOut: () => { },
});

export function useAuthContext() {
  return useContext(authContext);
}