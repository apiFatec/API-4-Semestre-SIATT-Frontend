import { Box, Text, Grid, Heading, Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import CardHome from "../components/CardHome";
import React from "react";

interface Reuniao {
  titulo: string;
  participantes: string;
  dataHora: string;
}


const Home = () => {
  // Pegando os dados do localStorage e convertendo para um array de objetos JavaScript
  const reunioes: Reuniao[] = JSON.parse(localStorage.getItem("reunioes") || "[]");

  reunioes.reverse()

  return (
    <Grid padding="5em" placeContent="start center" width="100vw">
      <Box display="grid" gap="20px" w="1200px">
        <Button justifySelf="end">Agendar Reunião</Button>
        <Heading as="h1">Agendas de hoje</Heading>
        <Divider />
        <Box display="flex" flexDirection="column" gap="25px" h="400px" overflow="auto" paddingRight="25px">
        {reunioes.map((reuniao, index) => (
          <CardHome key={index} reuniao={reuniao}/>
        ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default Home;
