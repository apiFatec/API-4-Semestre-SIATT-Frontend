import { Box, Link, Text, Image, ChakraBaseProvider, theme, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Home from "../assets/navbar/homeNavbar.svg";
import HistoricoNavbar from "../assets/navbar/historicoNavbar.svg";
import NovaReuniaoSidebar from "../assets/navbar/novaReuniaoSidebar.svg";
import NovoUsuario from "../assets/navbar/novoUsuario.svg";
import Logout from "../assets/navbar/logout.svg";

const sidebarItems = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/novareuniao", label: "Nova reunião", icon: NovaReuniaoSidebar },
  { to: "/historico", label: "Histórico", icon: HistoricoNavbar },
  { to: "/novousuario", label: "Novo usuário", icon: NovoUsuario },
];

const Sidebar = () => {
  return (
    
    <Box as="aside" bg="#161B22" color="white" w="18%" minH="100vh" p="4">
      <Box>
        <ChakraBaseProvider theme={theme}>
          <Box
            display="flex"
            alignItems="center"
            placeSelf="start"
            gap="12px"
            marginTop="6px"
          >
            <Image src={Logo} />
            <Text fontSize="20px" fontWeight="700">
              MeetHub
            </Text>
          </Box>
          <Box
            marginTop="30px"
            display="flex"
            flexDirection="column"
            gap="10px"
            fontSize="18px"
          >
            
              {sidebarItems.map((item) => (
                <Link
                  key={item.to}
                  as={RouterLink}
                  to={item.to}
                  display="flex"
                  alignItems="center"
                  gap="22px"
                  fontSize="16  px"
                  padding="15px 20px"
                  fontWeight="light"
                  _hover={{
                    backgroundColor: "#1C2129",
                    borderRadius: "5px",
                    transition: ".5s",
                  }}
                >
                  <Image src={item.icon} />
                  <Text>{item.label}</Text>
                </Link>  
            ))}
          </Box>
          <Box display="flex"
            justifyContent="center" 
            alignItems="center"
            gap="22px"
            padding="15px 20px"
            >
            <Image src={Logout}/>
            <Button as={'a'} fontSize="16 px" fontWeight="light" variant={'link'} href={'#'}>
              Sair da conta
            </Button>
          </Box>
        </ChakraBaseProvider> 
      </Box> 
    </Box>
  );
};

export default Sidebar;
