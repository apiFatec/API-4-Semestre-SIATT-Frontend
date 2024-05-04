import React, { useState } from "react";
import { formatISO } from 'date-fns';

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
} from "@chakra-ui/react";
import axios from "axios";

const NovaReuniao = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [meetingData, setMeetingData] = useState({
    topic: "",
    startDate: "", // Definido como string
    duration: "", // Definido como string
    accessToken: accessToken,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeetingData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Formatar a data aqui, após o usuário inserir a data
      const formattedDate = new Date(meetingData.startDate).toISOString().slice(0, 19) + 'Z';
      
      const response = await axios.post(
        "http://localhost:3000/meetings/create-meeting",
        {
          topic: meetingData.topic,
          startDate: formattedDate, // Corrigido para corresponder ao nome esperado no backend
          duration: meetingData.duration, // Corrigido para corresponder ao nome esperado no backend
          type: 2,
          accessToken: meetingData.accessToken, 
        }
      );
      console.log("Reunião criada com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao criar a reunião:", error);
    }
  };

  return (
    <Box display="grid" width="100vw" placeContent="center">
      <Box>
        <Heading fontWeight="500">Nova reunião</Heading>
        <Box marginTop="50px">
        <form onSubmit={handleSubmit}>
          <FormControl
            display="flex"
            flexDirection="column"
            gap="50px"
            onSubmit={handleSubmit}
          >
            <Box>
              <FormLabel htmlFor="titulo" fontSize="xl" marginBottom="10px" fontWeight="400">
                Título
              </FormLabel>
              <Input
                border="none"
                bg="customInputBackground"
                height="60px"
                id="titulo"
                placeholder="Adicionar título da reunião"
                name="topic"
                value={meetingData.topic}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Flex gap="20px" alignItems="center">
                <Box width="200px">
                  <Text fontSize="xl" marginBottom="10px" fontWeight="400">
                    Categoria
                  </Text>
                  <Select
                    bg="customInputBackground"
                    height="60px"
                    borderColor="#20272d"
                    _hover={{ cursor: "pointer" }}
                    name="category"
                    value= ''
                    onChange={handleChange}
                  >
                    <option value="opcao1" style={{ backgroundColor: "#20272d", borderColor: "#20272d" }}>
                      presencial
                    </option>
                    <option value="opcao2" style={{ backgroundColor: "#20272d", borderColor: "#20272d" }}>
                      remoto
                    </option>
                  </Select>
                </Box>
                <Box width="400px">
                  <Text fontSize="xl" marginBottom="10px" fontWeight="400">
                    Data e horário
                  </Text>
                  <Input
                    border="none"
                    bg="customInputBackground"
                    type="date"
                    height="60px"
                    _hover={{ cursor: "pointer" }}
                    name="startDate"
                    value={meetingData.startDate}
                    onChange={handleChange}
                  ></Input>
                </Box>
                <Box display="flex" gap="20px" alignItems="center" alignSelf="end">
                  <Input
                    border="none"
                    bg="customInputBackground"
                    height="60px"
                    placeholder="15:00"
                    name="duration"
                    value={meetingData.duration}
                    onChange={handleChange}
                  />
                  <Text color="#6F7274">às</Text>
                  <Input
                    border="none"
                    bg="customInputBackground"
                    height="60px"
                    placeholder="15:00"
                    name="duration"
                    value={meetingData.duration}
                    onChange={handleChange}
                  />
                </Box>
              </Flex>
            </Box>
            {/* Outros campos do formulário */}
            <Button
              width="140px"
              alignSelf="end"
              _hover={{ backgroundColor: "#808080", color: "white" }}
              type="submit"
            >
              Criar reunião
            </Button>
          </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default NovaReuniao;
