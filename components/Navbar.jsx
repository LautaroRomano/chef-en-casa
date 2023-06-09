import { Text, Flex } from "@chakra-ui/react";
import Login from './Login';

export default function App() {
  return (
    <Flex
      bg="mainColors.300"
      w="100vw"
      h="50px"
      position="fixed"
      boxShadow="2xl"
      justifyContent="space-between"
      align="center"
      zIndex="10"
    >
      <Flex>
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="white"
          fontFamily="sans-serif"
          ml="4"
        >
          Chef en Casa
        </Text>
      </Flex>
      <Login />
    </Flex>
  );
}
