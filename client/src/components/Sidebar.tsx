import React from "react";
import { Box, Link, Text, Image, Flex, HStack, IconButton, Grid, GridItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Home from "../assets/navbar/homeNavbar.svg";
import HistoricoNavbar from "../assets/navbar/historicoNavbar.svg";
import NovaReuniaoSidebar from "../assets/navbar/novaReuniaoSidebar.svg";
import NovoUsuario from "../assets/navbar/novoUsuario.svg";
import Logout from "../assets/navbar/logout.svg";
import { MdMenu } from "react-icons/md";

const sidebarItems = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/novareuniao", label: "Nova reunião", icon: NovaReuniaoSidebar },
  { to: "/historico", label: "Histórico", icon: HistoricoNavbar },
  { to: "/novousuario", label: "Novo usuário", icon: NovoUsuario },
];

const Sidebar = () => {
  const [collapse, setCollapse] = React.useState(false);
  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <HStack h="100vh">
      <Flex 
      width="full"
      as="aside"
      h="full"
      maxW={collapse ? 350 : 100}
      bg="#161B22"
      padding={6}
      flexDirection="column"
      justifyContent="space-between">
        <Flex flexDirection="column">

          <Grid templateColumns='repeat(2, 1fr)' gap={10}>
            {collapse &&
            <GridItem colSpan={1}>
            <Flex
            alignItems="center"
            gap="12px"
            marginTop="6px">
              <Image src={Logo} />
              <Text fontSize="20px" fontWeight="700" >
                MeetHub
              </Text>
            </Flex>
            </GridItem>
            }
            <GridItem colSpan={1} placeSelf={!collapse ? "center" : "end"} marginTop="6px"   
              marginLeft={!collapse ? "6px" : ""}>
              <IconButton
              aria-label="Menu Collapse" 
              icon={<MdMenu style={{color: "#fff", fontSize: "28px"}}/>} 
              _hover={{bgColor: "#1C2129"}} 
              bgColor="transparent"
              onClick={handleCollapse}>
              </IconButton>
            </GridItem>
          </Grid>
          
          <Box 
          marginTop="66px"
          display="flex"
          flexDirection="column"
          gap="10px"
          fontSize="18px"
          alignItems={!collapse ? "center" : ""}>
            {sidebarItems.map((item) => (
              <Link
                key={item.to}
                as={RouterLink}
                to={item.to}
                display="flex"
                alignItems="center"
                gap="22px"
                fontSize="16px"
                padding="15px 20px"
                _hover={{
                  backgroundColor: "#1C2129",
                  borderRadius: "5px",
                  transition: ".5s",
                }} >
                <Image src={item.icon} minW="25px" maxW="25px"/>
                {collapse && 
                <Text>{item.label}</Text>
                }
              </Link>  
            ))} 
          </Box>  
        </Flex>
        <Box 
        display="flex"
        justifyContent="center" 
        gap="22px">
          <Link
            as={RouterLink}
            display="flex"
            gap="22px"
            fontSize="16 px"
            padding="15px 20px"
            fontWeight="light"
            _hover={{
              backgroundColor: "#1C2129",
              borderRadius: "5px",
              transition: ".5s",
            }} >
            <Image src={Logout} minW="25px" />
            {collapse &&
              <Text>Sair da conta</Text>
            }
          </Link> 
        </Box>            
      </Flex>
    </HStack>
  );
};

export default Sidebar;
