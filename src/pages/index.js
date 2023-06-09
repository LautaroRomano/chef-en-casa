import { Text, Flex, Grid } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Ingredient from "../../components/Ingredient";
import Categorias from "../../components/Categorias";
import { ingredients } from "../../listadoDeIngredientes";
import { useState } from "react";
import { consulta } from "../../consulta";
import ViewReceta from "../../components/ViewReceta";

export default function App() {
  const [categoriSelected, setCategoriSelected] = useState(-1);
  const ingredientsData = ingredients.data;
  const allIngredients = ingredientsData[0].concat(
    ingredientsData[1],
    ingredientsData[2],
    ingredientsData[3],
    ingredientsData[4],
    ingredientsData[5]
  );
  const [ingredientsSelected, setIngredientsSelected] = useState([]);
  const [receta, setReceta] = useState(null);
  const callbackConsulta = (receta) => {
    setReceta(receta);
  };

  return (
    <Flex
      flexDir={"column"}
      bg={"mainBackgroundColor.500"}
      alignItems="center"
      w={"100vw"}
      h="100vh"
    >
      <Navbar />

      {receta && <ViewReceta receta={receta} setReceta={setReceta} />}

      <Text
        mt={"60px"}
        color="mainColors.100"
        fontSize={"20px"}
        fontWeight="700"
      >
        Selecciona tus ingredientes
      </Text>
      <Flex h={"3px"} w="50px" bg={"mainColors.300"} mt="10px"></Flex>
      <Categorias
        setCategoriSelected={setCategoriSelected}
        categoriSelected={categoriSelected}
      />
      <Grid
        templateColumns={["repeat(3, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"]}
        w={["375px","500px","500px","500px"]}
        gap={0}
        overflowY="scroll"
        h="auto"
        maxH={"400px"}
        mt='15px'
        zIndex={0}
      >
        {categoriSelected === -1
          ? allIngredients.map((data, i) => (
              <Ingredient
                key={i}
                name={data.name}
                ico={data.ico}
                onClick={() =>
                  setIngredientsSelected((arr) => {
                    if (!arr.includes(data.id)) return [...arr, data.id];
                    const newArr = arr.filter((f) => f !== data.id);
                    return newArr;
                  })
                }
                active={ingredientsSelected.includes(data.id)}
              />
            ))
          : ingredients.data[categoriSelected].map((data, i) => (
              <Ingredient
                key={i}
                name={data.name}
                ico={data.ico}
                onClick={() =>
                  setIngredientsSelected((arr) => {
                    if (!arr.includes(data.id)) return [...arr, data.id];
                    const newArr = arr.filter((f) => f !== data.id);
                    return newArr;
                  })
                }
                active={ingredientsSelected.includes(data.id)}
              />
            ))}
      </Grid>
      <Flex
        borderRadius="4px"
        p="12px 24px"
        bg={"mainColors.300"}
        color="mainColors.200"
        fontSize={"18px"}
        fontWeight="bold"
        textAlign={"center"}
        cursor="pointer"
        mt={'15px'}
        onClick={() =>
          consulta(ingredients, ingredientsSelected, callbackConsulta)
        }
      >
        Generar receta
      </Flex>
    </Flex>
  );
}
