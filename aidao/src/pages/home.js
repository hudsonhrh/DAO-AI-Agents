import React from 'react';
import { Center, Text, Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Center h="100vh" w="100vw" bg="gray.100">
      <Box p="8" bg="white" boxShadow="lg" borderRadius="md">
        <Text fontSize="4xl" color="gray.800">
          Welcome to AI DAO tool
        </Text>
      </Box>
    </Center>
  );
};

export default Home;
