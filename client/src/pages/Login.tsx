import {
    Button,
    Flex,
    FormControl,
    Text,
    Image,
    Input,
    Stack,
    useColorModeValue,
    CircularProgress,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import Logo from "../assets/logo.svg";

import actions from '../zustand/auth-store/actions';
import { authStore } from '../zustand/auth-store';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const { fields: { email, password }, isLoading, data } = authStore();
  const dispatch = authStore(state => state.dispatch);
  const { changeFields, login } = actions(dispatch);
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {
    if (data?.access_token) {
      navigate('/home');
    }
  }, [data?.access_token])

    return(
    <Flex
      minH={'100vh'}
      minW={'100%'}
      align={'center'}
      justify={'center'}
      direction={'column'}>
        <Stack direction={'row'}>
            <Image src={Logo} paddingEnd={'5'} h={'75'}/>
            <Text fontSize="50px" fontWeight="700">
            MeetHub
            </Text>
        </Stack>
      <Stack
        spacing={7}
        w={'full'}
        h={'275'}
        justify={'center'}
        maxW={'md'}
        align={'center'}
        bg={useColorModeValue('#161B22', 'gray.700')}
        rounded={'md'}
        boxShadow={'lg'}
        p={10}
        my={7}>
        <FormControl id="email" isRequired>
          <Input
            value={email}
            onChange={e => changeFields({ key: 'email', value: e.target.value })}
            placeholder="Insira seu e-mail"
            _placeholder={{ color: '#6F7277' }}
            type="email"
            bg="customInputBackground"
            border={"none"}
            h={'46'}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <InputGroup>
            <Input type={showPassword ? 'text' : 'password'} 
              value={password}
              onChange={e => changeFields({ key: 'password', value: e.target.value })}
              bg="customInputBackground"
              placeholder="Senha"
              _placeholder={{ color: '#6F7277' }}
              border={"none"}
              h={'46'}
              />
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
        <Stack spacing={6}>
          <Button
            bg={'#F0F0F0'}
            color={'#161B22'}
            w={"132px"}
            rounded={"16"}
            _hover={{
              bg: '#6F7277',
            }}
            onClick={login}>
            {isLoading ? <CircularProgress size={'20px'} isIndeterminate></CircularProgress> : 'Entrar'}
          </Button>
        </Stack>
      </Stack>
    </Flex>
    )
}

export default Login