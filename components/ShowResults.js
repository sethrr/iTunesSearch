import { useState, useContext, useEffect } from "react";
import useResults from "../utils/useResults";
import { Box, Stack, Text, Flex, Grid, Image, Heading } from "@chakra-ui/react";
import AudioPlayer from "./AudioPlayer";
import SearchContext from "../utils/searchContext";

export default function ShowResults({ url }) {
  const items = useResults(url);
  const results = items.results;
  const { term } = useContext(SearchContext);
  const [length, setLength] = useState("0");

  useEffect(() => {
    if (results) { 
    setLength(results.results.length)
    }
  });

  if (!results)
    return (
      <Box maxW="1200px" m="0 auto">
        <Heading  mt="3" color="white" fontSize="25px"> Loading... </Heading>
      </Box>
    );

  if (length == 0)  
  return (
    <Box maxW="1200px" m="0 auto">
      <Heading mt="3" color="white" fontSize="25px"> No Results. Sorry, I guess. </Heading>
    </Box>
  ); 

  return (
    <Box maxW="1200px" m="0 auto">
      <Grid gridTemplateRows="2fr" gridTemplateColumns="2fr" gridGap="2px">
        <Text fontSize="16px" color="white" mt="2">
          Showing {length} results for: {term}{" "}
        </Text>
        {results.results.map((result, index) => {
          return (
            <div key={index}>
              <Flex
                alignItems="center"
                alignContent="center"
                flexDirection="row"
                padding="3"
                borderBottom="1px solid #baffe1"
                mt="5"
                mb="5"
                paddingBottom="3rem"
              >
                <div>
                  <img
                    src={result.artworkUrl100}
                    width="150px"
                    height="150px"
                  />
                </div>
                <Flex flexDirection="column" ml="5" flexGrow="1" color="white">
                  <Stack spacing={4}>
                    <Text fontSize="24px">
                      {" "}
                      Artist Name: {result.artistName}{" "}
                    </Text>
                    <Text fontSize="20px"> Type: {result.wrapperType}</Text>
                  </Stack>
                </Flex>

                <Box
                  background="#2b5876"
                  padding="1.5rem 2rem"
                  borderRadius="5px"
                  color="white"
                  minW="120px"
                >
                  <Flex alignItems="center">
                    <Image
                      src={result.artworkUrl60}
                      height="60px"
                      width="60px"
                      mr={5}
                    ></Image>
                    <Stack spacing={1}>
                      <AudioPlayer url={result.previewUrl} />
                    </Stack>
                  </Flex>
                </Box>
              </Flex>
            </div>
          );
        })}
      </Grid>
    </Box>
  );
}
