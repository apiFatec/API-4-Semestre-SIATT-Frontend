import { Button, useToast } from '@chakra-ui/react'

function ToastCardHome() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Reunião criado.',
            description: "Criamos uma reunião para voc.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }

export default ToastCardHome