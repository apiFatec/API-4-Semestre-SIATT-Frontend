import { Box, Heading, Text, Button } from "@chakra-ui/react";
import ModalCancelCard from "./ModalCancelCard";

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

  return (
    <Box>
    <Box display="flex" justifyContent="space-between" padding="20px" borderRadius="5px" backgroundColor="#D9D9D9" borderLeft="10px solid green" height="80px" marginBottom="10px">
      <Box color="black" gap="7px" placeSelf="center" display="flex" flexDirection="column">
        <Heading color="black" as="h1" fontSize="18px">
          {reuniao.titulo}
        </Heading>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text>{reuniao.participantes}</Text>
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
