import {
    Button,
    Flex,
    FormControl,
    Text,
    Image,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'

import Logo from "../assets/logo.svg";

const Login = () => {
    return(
    <Flex
      minH={'100vh'}
      minW={'85%'}
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
            placeholder="Insira seu e-mail"
            _placeholder={{ color: '#6F7277' }}
            type="email"
            bg="customInputBackground"
            border={"none"}
            h={'46'}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <Input type="password" 
            bg="customInputBackground"
            placeholder="Senha"
            _placeholder={{ color: '#6F7277' }}
            border={"none"}
            h={'46'}
            />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'#F0F0F0'}
            color={'#161B22'}
            w={"132px"}
            rounded={"16"}
            _hover={{
              bg: '#6F7277',
            }}>
            Entrar
          </Button>
        </Stack>
      </Stack>
    </Flex>
    )
}

export default Login