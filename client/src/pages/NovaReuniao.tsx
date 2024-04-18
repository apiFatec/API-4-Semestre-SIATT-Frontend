import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack
} from "@chakra-ui/react";


const NovaReuniao = () => {
  return (
    <Box display="grid" width="100vw" placeContent="center">
      <Box>
        <Heading fontWeight="500">Nova reunião</Heading>
        <Box marginTop="50px">
          <FormControl display="flex" flexDirection="column" gap="50px">
            <Box>
              <FormLabel htmlFor="titulo" fontSize="xl" marginBottom="10px" fontWeight="400">Título</FormLabel>
              <Input border="none" bg="customInputBackground" height="60px" id="titulo" placeholder="Adicionar título da reunião" />
            </Box>
            <Box>
              <Flex gap="20px" alignItems="center" >
                <Box width="200px">
                  <Text fontSize="xl" marginBottom="10px" fontWeight="400">Categoria</Text>
                  <Select bg="customInputBackground" height="60px" borderColor="#20272d" _hover={{cursor: "pointer"}}>
                    <option value="opcao1" style={{ backgroundColor: "#20272d", borderColor: "#20272d" }}>presencial</option>
                    <option value="opcao2" style={{ backgroundColor: "#20272d", borderColor: "#20272d" }}>remoto</option>
                  </Select>
                </Box>
                <Box width="400px" >
                  <Text fontSize="xl" marginBottom="10px" fontWeight="400">Data e horário</Text>
                  <Input border="none" bg="customInputBackground" type="date" height="60px" _hover={{cursor: "pointer"}}></Input>
                </Box>
                <Box display="flex" gap="20px" alignItems="center" alignSelf="end"> 
                  <Input border="none" bg="customInputBackground" height="60px" placeholder="15:00" />
                  <Text  color="#6F7274">às</Text>
                  <Input border="none" bg="customInputBackground" height="60px" placeholder="15:00" />
                </Box>
              </Flex>
            </Box>
            <Box>
              <VStack>
                <FormControl id="participantes">
                  <FormLabel fontSize="xl" marginBottom="10px" fontWeight="400">Participantes</FormLabel>
                  <Input border="none" bg="customInputBackground" height="60px" type="text" placeholder="Adicionar participantes" />
                </FormControl>
              </VStack>
            </Box>
            <Box>
              <VStack>
                <FormControl id="salaReuniao">
                  <FormLabel fontSize="xl" marginBottom="10px" fontWeight="400">Sala de reunião</FormLabel>
                  <Input border="none" bg="customInputBackground" height="60px" type="text" placeholder="Selecionar sala de reunião" />
                </FormControl>
              </VStack>
            </Box>
            <Box>
              <VStack > 
                <FormControl id="pauta">
                  <FormLabel fontSize="xl" marginBottom="10px" fontWeight="400">Pauta prevista</FormLabel>
                  <Box display="flex" justifyContent="space-between" >
                    <Textarea bg="customInputBackground" border="none" height="140px" width="80%" placeholder="Escreva detalhes da reunião" />
                    <Button width="140px" alignSelf="end" _hover={{backgroundColor: "#808080", color: "white"}}>Salvar</Button>
                  </Box>
                </FormControl>
              </VStack>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default NovaReuniao;
