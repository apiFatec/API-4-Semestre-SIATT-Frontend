import {
  Routes,
  Route,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import NovaReuniao from "../pages/NovaReuniao";
import Historico from "../pages/Historico";
import NovoUsuario from "../pages/NovoUsuario";
import Sidebar from "../components/Sidebar";
import { Flex } from "@chakra-ui/react";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Flex>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/novareuniao" element={<NovaReuniao />} />
          <Route path="/novousuario" element={<NovoUsuario />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </Flex>
    </BrowserRouter>
  );
};

export default AppRoutes;
