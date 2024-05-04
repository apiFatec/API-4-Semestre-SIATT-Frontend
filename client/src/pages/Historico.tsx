import { Box, Text, Heading } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import React from "react";

const Historico = () => {
  return (
    <Box display="grid" width="100vw" padding="6rem" >
      <Box>
        <Heading as="h1" fontWeight="500" marginBottom=".6rem">
           Últimas agendas
        </Heading>
        <Divider width="100%" marginBottom="1rem"/>
        <Box overflowY="auto" >
          {/* {renderizar os cards aqui com map} */}
        </Box>
      </Box>


export default Historico;
