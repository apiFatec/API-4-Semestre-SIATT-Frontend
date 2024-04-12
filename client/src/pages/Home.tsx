import { Box, Grid, Heading, Button, Toast, Image } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import CardHome from "../components/CardHome";
import { json } from "react-router-dom";
import { useToast } from "@chakra-ui/react"
import { useState } from "react";
import calendarioHome from "../assets/calendarioHome.svg"

interface Reuniao { 
  id: number
  titulo: string;
  participantes: string;
  dataHora: string;
}

const Home = () => {
  // Pegando os dados do localStorage e convertendo para um array de objetos JavaScript
  let nextId = 1;

  function generateId() {
    return nextId++;
  }
  const [reunioes, setReunioes] = useState<Reuniao[]>(() => {
    const reunioesLocalStorage = localStorage.getItem("reunioes");
    return reunioesLocalStorage
      ? JSON.parse(reunioesLocalStorage).map((reuniao: Reuniao) => ({
          ...reuniao,
          id: reuniao.id || generateId(),
        }))
      : [];
  });


  const toast = useToast()

  const deleteReuniao = (id: number) => {
    const novasReunioes = reunioes.filter((reuniao) => reuniao.id !== id);
    localStorage.setItem("reunioes", JSON.stringify(novasReunioes));
    setReunioes(novasReunioes);
  
    toast({
      title: 'Reunião cancelada.',
      description: "Sua reunião foi cancelada com sucesso.",
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
  
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  };

  reunioes.reverse();

  return (
    <Grid padding="5em 0em" placeContent="start center" width="100vw">
      <Box
        display="grid"
        gap="20px"
        w={{ xl: "70vw", lg: "60vw", md: "55vw" }}
        h={{ xl: "100px", lg: "100px" }}
      >
        <Button justifySelf="end" h="40px" display="flex" gap="20px" alignItems="center" fontWeight="600" fontSize="18px">
          <Image src={calendarioHome}/> Agendar Reunião
        </Button>
        <Heading as="h1">Agendas de hoje</Heading>
        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          gap="25px"
          h="400px"
          overflow="auto"
          paddingRight="25px"
        >
          {reunioes.map((reuniao) => (
            <CardHome
              key={reuniao.id}
              id={reuniao.id}
              reuniao={reuniao}
              onDelete={deleteReuniao}
            />
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default Home;
