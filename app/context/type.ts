import type{ Dispatch, SetStateAction } from "react";

export interface SearchContextType {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}