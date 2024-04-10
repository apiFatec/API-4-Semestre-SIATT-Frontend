import { Box, Link, Text, Image, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Home from "../assets/navbar/homeNavbar.svg";
import HistoricoNavbar from "../assets/navbar/historicoNavbar.svg";
import NovaReuniaoNavbar from "../assets/navbar/novaReuniaoNavbar.svg";
import NovoUsuario from "../assets/navbar/novoUsuario.svg";

const sidebarItems = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/novareuniao", label: "Nova reunião", icon: NovaReuniaoNavbar },
  { to: "/historico", label: "Histórico", icon: HistoricoNavbar },
  { to: "/novousuario", label: "Novo usuário", icon: NovoUsuario },
];

const Sidebar = () => {
  return (
    <Box as="aside" bg="#161B22" color="white" w={{xl:"21vw", lg: "21vw"}} minH="100vh" p="4">
      <Box>
        <Box display="flex" alignItems="center" placeSelf="start" gap="12px" marginTop="6px">
          <Image src={Logo} />
          <Text fontSize="20px" fontWeight="700"> MeetHub </Text>
        </Box>
        <Box marginTop="30px" display="flex" flexDirection="column" gap="10px" fontSize={{xl: "18px", lg: "16px"}}>
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
              fontWeight="500"
              _hover={{
                backgroundColor: "#1C2129",
                borderRadius: "5px",
                transition: ".5s",
              }}
            >
              <Image width={{xl:"25px", lg: "20px"}} height={{xl: "25px", lg: "20px"}} src={item.icon} />
              <Text>{item.label}</Text>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};


export default Sidebar;
