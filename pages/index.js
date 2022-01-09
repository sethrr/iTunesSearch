import ShowResults from '../components/ShowResults.js';
import TypesSelector from '../components/TypesSelector';
import Search from '../components/Search'
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import SearchContext from "../utils/searchContext";

export default function IndexPage() {
  const valueFromStorage = typeof window !== 'undefined' ? localStorage.getItem('searchTerm').value : null;
  const [term, setTerm] = useState(valueFromStorage);
  const value = useMemo(() => ({ term, setTerm }), [term]);
  console.log(valueFromStorage);

  return (
    <ThemeProvider theme={theme}>
      <SearchContext.Provider value={value}>
      <CSSReset></CSSReset>
      <Box bgGradient="linear(to-l, #2b5876, #4e4376)" minH="100vh" padding="2rem">
      <Search></Search>
      </Box>
      </SearchContext.Provider>
    </ThemeProvider>
  );
}
