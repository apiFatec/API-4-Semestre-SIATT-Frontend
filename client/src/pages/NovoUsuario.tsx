import { Box, Button, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Select } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'

import { useToast } from '@chakra-ui/react';
import axios from 'axios';

const NovoUsuario = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });

  const toast = useToast();

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/usuario/cadastrar",
        {
          name: user.name,
          email: user.email,
          password: user.password,
        }
      );

      setUser({
        name: "",
        email: "",
        password: "",
        type: "",
      })

      toast({
        title: "Usuário cadastrado",
        description: "O usuário foi cadastrado com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

    } catch (error) {
      console.error("Erro ao cadastrar usuário", error)
      
      toast({
        title: "Erro ao cadastrar usuário",
        description: "Houve um erro ao cadastrar o novo usuário. Por favor, tente novamente.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  }


  return (
    <Box display="grid" width="100vw" placeContent="center">
      <Box w={[200, 300, 500, 700, 982]}>
        <Heading fontWeight="500">Cadastrar novo colaborador</Heading>
        <Box marginTop="50px">
          <form onSubmit={handleSubmit}>
            <FormControl
              display="flex"
              flexDirection="column"
              gap="50px"
            >
              <FormControl isRequired>
              <FormLabel htmlFor="name" fontSize="xl" marginBottom="10px" fontWeight="400" >
                  Nome Completo
                </FormLabel>
                <Input
                  border="none"
                  bg="customInputBackground"
                  height="60px"
                  id="nome"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="Nome e sobrenome"
                />
              </FormControl>

              <FormControl isRequired>
              <FormLabel htmlFor="email" fontSize="xl" marginBottom="10px" fontWeight="400">E-mail</FormLabel>
              <Input
                type="email" 
                border="none"
                bg="customInputBackground"
                height="60px" 
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Digite o e-mail do colaborador"/>
              </FormControl>

              <FormControl id="senha" isRequired>
                <FormLabel htmlFor="password" fontSize="xl" marginBottom="10px" fontWeight="400">Senha</FormLabel>
                <InputGroup>
                  <Input 
                    type={showPassword ? 'text' : 'password'}
                    border="none"
                    bg="customInputBackground"
                    height="60px"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Insira uma senha"/>
                  <InputRightElement h={'full'}>
                    <Button
                    bgColor="transparent"
                    textColor="#f0f0f0"
                    _hover=""
                    _active=""
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor="type" fontSize="xl" marginBottom="10px" fontWeight="400">Tipo de usuário</FormLabel>
                  <Select 
                    border="none"
                    bg="customInputBackground"
                    height="60px"
                    _hover={{ cursor: "pointer" }}
                    name="type"
                    value={user.type}
                    onChange={handleChange}
                    placeholder="Selecione o nível de permissão do usuário" >
                    <option value="opcao1" style={{ backgroundColor: "#20272d", borderColor: "#20272d" }}>Nível 1</option>
                    <option value="opcao2" style={{ backgroundColor: "#20272d", borderColor: "#20272d" }}>Nível 2</option>
                    <option value="opcao3" style={{ backgroundColor: "#20272d", borderColor: "#20272d" }}>Nível 3</option>
                  </Select>
                </FormControl>
              </Box>

              <Button
                width="140px"
                alignSelf="end"
                _hover={{ backgroundColor: "#808080", color: "white" }}
                type="submit"
              >
                Cadastrar
              </Button>
              
            </FormControl>
          </form>  
        </Box>
      </Box>
    </Box>
  )
}

export default NovoUsuario;