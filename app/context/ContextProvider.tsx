"use client"
import { use, useState } from 'react';
import { SearchContext } from './SearchContext'

const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState("");
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {
                children
            }
        </SearchContext.Provider>
    )
}
export function useSearch(){
    const context = use(SearchContext);
    if(!context){
        throw new Error("Context can not be null")
    }
    return context;
}

export default SearchContextProvider