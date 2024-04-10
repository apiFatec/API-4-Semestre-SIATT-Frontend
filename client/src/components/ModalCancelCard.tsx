import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

function ModalCancelCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelarReuniao = () => {
    /* funcao para cancelar a reuniao */
  };

  return (
    <>
      <Button onClick={onOpen}>Cancelar</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="500px" h="200px">
          <ModalHeader sx={{ fontSize: "18px" }} backgroundColor="#823A3A">
            Cancelar reunião
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody
            alignContent="center"
            display="flex"
            flexDirection="column"
            gap="15px"
            padding="20px 15px"
            backgroundColor="#161B22"
          >
            <Text color="#F0F0F0">
              Você tem certeza que deseja cancelar a reunião?
            </Text>
            <Divider />
          </ModalBody>

          <ModalFooter backgroundColor="#161B22">
            <Button mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button
              onClick={cancelarReuniao}
              color="white"
              width="40%"
              backgroundColor="#823A3A"
              _hover={{ backgroundColor: "#3F0A0A" }}
            >
              Cancelar Reunião
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCancelCard;
