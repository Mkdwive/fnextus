import { createContext } from "react";
import { SearchContextType } from "./type";
export const SearchContext = createContext<null| SearchContextType>(null);
