import { useState, useEffect } from "react";
import { Stack, Button, Link, Text, Flex, Grid } from "@chakra-ui/react";
import useSound from "use-sound";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";

export default function AudioPlayer({ url }) {
  const [play, { stop }] = useSound(url);
  const [PlayStatus, setPlayStatus] = useState(false);

  const stopPreview = () => {
    stop();
    setPlayStatus(false);
  };

  const playPreview = () => {
    play();
    setPlayStatus(true);
  };


  return (
    <>
        {PlayStatus ? (<Stack spacing={1}><Button onClick={stopPreview} bg="transparent"  _hover={{ bg: "transparent" }}><FaPauseCircle size={30} color="white"/></Button><p>Pause Preview</p></Stack> ) : 
        ( <Stack spacing={1}><Button onClick={playPreview} bg="transparent"  _hover={{ bg: "transparent" }}> <FaPlayCircle size={30} color="white"/> </Button><p>Play Sample</p></Stack>)}
    </>
  );
}
