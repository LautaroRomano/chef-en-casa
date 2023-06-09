import { Text, Flex } from "@chakra-ui/react";
import { ingredients } from "../listadoDeIngredientes";

export default function App({ categoriSelected, setCategoriSelected }) {
  return (
    <Flex
      className="container"
      bg={"mainBackgroundColor"}
      alignItems="center"
      overflowX={"scroll"}
      w={["100vw","100vw","500px","500px"]}
      h={"35px"}
      minH={"35px"}
      mt="15px"
    >
      <Flex
        onClick={() => setCategoriSelected(-1)}
        p="5px 10px"
        bg={"mainColors.300"}
        mx="5px"
        borderRadius={"4px"}
        color="mainColors.200"
        h={"100%"}
      >
        <Text>Todos</Text>
      </Flex>
      {ingredients.categorias.map((cat, i) => (
        <Flex
          key={i}
          onClick={() => setCategoriSelected(i)}
          p="5px 10px"
          bg={"mainColors.300"}
          mx="5px"
          borderRadius={"4px"}
          color="mainColors.200"
          h={"100%"}
        >
          <Text>{cat}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
