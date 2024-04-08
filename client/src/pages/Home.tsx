import { Box, Button, Divider, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CardHome from '../components/CardHome'

const Home = () => {
  return (
    <Grid padding="5em" placeContent="start center" width="100vw">
      <Box display="grid" gap="20px" w="1200px">
        <Button justifySelf="end">Agendar Reunião</Button>
        <Heading as="h1">Agendas de hoje</Heading>
        <Divider />
        <Box display="flex" flexDirection="column" gap="25px" h="400px" overflow="auto" paddingRight="25px">
        <CardHome/>
        </Box>
      </Box>
    </Grid>
  )
}

export default Home
