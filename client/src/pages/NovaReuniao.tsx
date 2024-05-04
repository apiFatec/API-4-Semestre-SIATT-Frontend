import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Input,
  Select,
  Text,
  FormControl,
  FormLabel,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react';
import { formatISO } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

const NovaReuniao = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [meetingData, setMeetingData] = useState({
    topic: "",
    startDate: "",
    startHour: "",
    endHour: "",
    type: "",
    accessToken: accessToken,
  });

  const toast = useToast();

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
      const startDateTime = toZonedTime(
        new Date(`${meetingData.startDate}T${meetingData.startHour}:00`),
        'America/Sao_Paulo'
      );
      const startHour = parseInt(meetingData.startHour);
      const endHour = parseInt(meetingData.endHour);
      const durationInSeconds = (endHour - startHour) * 60;

      const response = await axios.post(
        "http://localhost:3000/meetings/create-meeting",
        {
          topic: meetingData.topic,
          startDate: formatISO(startDateTime),
          duration: durationInSeconds.toString(),
          type: 2,
          accessToken: meetingData.accessToken,
        }
      );

      const joinUrl = response.data.join_url;
      localStorage.setItem("joinUrl", joinUrl);

      const novaReuniao = {
        titulo: meetingData.topic,
        participantes: "",
        joinUrl: joinUrl
      };

      const reunioesLocalStorage = localStorage.getItem("reunioes");
      const reunioes = reunioesLocalStorage ? JSON.parse(reunioesLocalStorage) : [];
      const novasReunioes = [...reunioes, novaReuniao];
      localStorage.setItem("reunioes", JSON.stringify(novasReunioes));

      setMeetingData({
        topic: "",
        startDate: "",
        startHour: "",
        endHour: "",
        type: "",
        accessToken: accessToken,
      });

      toast({
        title: "Reunião agendada",
        description: "Sua reunião foi agendada com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

    } catch (error) {
      console.error("Erro ao criar a reunião:", error);

      toast({
        title: "Erro ao agendar a reunião",
        description: "Houve um erro ao agendar a reunião. Por favor, tente novamente.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
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
              <Select
                border="none"
                bg="customInputBackground"
                height="60px"
                _hover={{ cursor: "pointer" }}
                name="type"
                value={meetingData.type}
                onChange={handleChange}
              >
                <option value="presencial" style={{ backgroundColor: "#20272d", borderColor: "#20272d" }}>
                  Presencial
                </option>
                <option value="remoto" style={{ backgroundColor: "#20272d", borderColor: "#20272d" }}>
                  Remoto
                </option>
                <option value="hibrido" style={{ backgroundColor: "#20272d", borderColor: "#20272d" }}>
                  Híbrido
                </option>
              </Select>
              <Box>
                <Flex gap="20px" alignItems="center">
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
                    />
                  </Box>
                  <Box display="flex" gap="20px" alignItems="center" alignSelf="end">
                    <Input
                      border="none"
                      bg="customInputBackground"
                      height="60px"
                      placeholder="Hora de início"
                      name="startHour"
                      value={meetingData.startHour}
                      onChange={handleChange}
                    />
                    <Text color="#6F7274">às</Text>
                    <Input
                      border="none"
                      bg="customInputBackground"
                      height="60px"
                      placeholder="Hora de término"
                      name="endHour"
                      value={meetingData.endHour}
                      onChange={handleChange}
                    />
                  </Box>
                </Flex>
              </Box>
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
