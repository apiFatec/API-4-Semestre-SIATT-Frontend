import { Box, Heading, Text, Button } from "@chakra-ui/react";
import ModalCancelCard from "./ModalCancelCard";
import { useState } from "react";

interface Reuniao {
  id: number
  titulo: string;
  participantes: string;
  dataHora: string;
}

interface Props {
  reuniao: Reuniao
  id: number
  onDelete: (id:number) => void
}

const CardHome = ({reuniao, id, onDelete}: Props) => {
  // Pegando os dados do localStorage
  const reunioes: Reuniao[] = JSON.parse(localStorage.getItem("reunioes") || "[]");
  
  const cancelarReuniao = () => {
    const reunioesLocalStorage = JSON.parse(localStorage.getItem("reunioes") || "[]");
    const novasReunioes = reunioesLocalStorage.filter((reuniao: Reuniao) => reuniao.id !== id);
    localStorage.setItem("reunioes", JSON.stringify(novasReunioes));
    onDelete(id);
  };

  const getRandomColor = () => {
    const colors = [
      "#FF6B6B", // Vermelho
      "#48BB78", // Verde
      "#3182CE", // Azul
      "#F6E05E", // Amarelo
      "#9F7AEA", // Roxo
      "#ED64A6", // Rosa
      "#F56565", // Vermelho claro
      "#48BB78", // Verde claro
      "#4299E1", // Azul claro
      "#F6E05E", // Amarelo claro
      "#9F7AEA", // Roxo claro
      "#ED64A6", // Rosa claro
      "#6EE7B7", // Verde menta
      "#F2C94C", // Amarelo suave
      "#6A4029", // Marrom
      "#2D3748", // Cinza escuro
      "#319795", // Verde azulado
      "#E53E3E", // Vermelho forte
      "#667EEA", // Azul claro
      "#718096", // Cinza azulado
    ];
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  return (
    <Box>
    <Box display="flex" justifyContent="space-between" padding="20px" borderRadius="5px" backgroundColor="#D9D9D9" borderLeft={`10px solid ${getRandomColor()}`} height="80px" marginBottom="10px">
      <Box color="black" gap="7px" placeSelf="center" display="flex" flexDirection="column">
        <Heading color="black" as="h1" fontSize="18px">
          {reuniao.titulo}
        </Heading>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text marginRight="15px">{reuniao.participantes}</Text>
          <Text fontSize="14px">{reuniao.dataHora}</Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" gap="10px">
        <Button>Ingressar</Button>
        <ModalCancelCard id={reuniao.id} onDelete={cancelarReuniao}/>
      </Box>
    </Box>
  </Box>
  );
};

export default CardHome;
