import { useState, useEffect, useContext } from "react";
import ShowResults from "./ShowResults";
import styles from '../assets/base.module.css';
import { FaSearch } from "react-icons/fa";
import SearchContext from '../utils/searchContext';


import {
  Box,
  Input,
  Button,
  Flex,
  Text,
  Stack,
  Select,
  Heading,
} from "@chakra-ui/react";


export default function Search() {
  const { term, setTerm } = useContext(SearchContext);
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState('all');

  const updateTerm = (event) => {
    setTerm(event.target.value);
    updateStorage(event.target.value)
  };
  
  function updateStorage(term) {
    setTimeout(()=>{
      localStorage.setItem('searchTerm', term);
    }, 3000)
  }

  return (
    <div>
      <Box >
        <Box maxW="1200px" m="0 auto">
          <Heading size="h1" size="xl" textTransform="none" color="teal" mb="3">
            SEARCH iTUNES
          </Heading>
          <Flex justifyContent="center">
            <Box
              w="100%"
              background="lightred"
              display="flex"
              border="1px solid #baffe1"
              borderRadius="5px"
            >
              <Stack spacing={3} className={styles.coolselect}>
                <Select
                  borderColor="#baffe1"
                  color="white"
                  size='lg'
                  variant="outline"
                  onChange={e => {setFilter(e.target.value) && setSearch(!search)} }
                >
                  <option value="all">All</option>
                  <option value="audiobook">Book</option>
                  <option value="podcast">Podcast</option>
                  <option value="music">Music</option>
                  <option value="shortFilm">Short</option>
                  <option value="tvShow">TV</option>
                  <option value="ebook">E-Book</option>


                </Select>
              </Stack>
              <Input
                type="text"
                value={term}
                onChange={updateTerm}
                placeholder="Please enter a search term"
                color="white"
                fontSize="large"
                border="none"
                height="100%"
                defaultValue={term}
              />

              <Button
                className="button1"
                type="button"
                padding="10px 40px"
                background="#4e4376"
                minW="0"
                color="white"
                borderRadius="0"
                value="Search"
                text="Search"
                height="100%"
                borderRadius="5px"
                onClick={() => setSearch(!search)}
              >
                <FaSearch />
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box bgGradient="linear(to-l, #2b5876, #4e4376)" height="100%">
        {search ? (
          <ShowResults url={`https://itunes.apple.com/search?media=${filter}&term=${term}.`}> </ShowResults> 
        ) : (
          ""
        )}
      </Box>
    </div>
  );
}
