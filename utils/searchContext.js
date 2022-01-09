import { createContext } from "react";

const SearchContext = createContext({
    term: "",
    setTerm: () => {}
});

export default SearchContext;
