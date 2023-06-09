import { Text, Flex, Input, Spinner } from "@chakra-ui/react";
import { marked } from "marked";
import { useState } from "react";
import styles from "../src/styles/ViewReceta.module.css";
import axios from "axios";
import { Icon } from "@chakra-ui/react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export default function App({ receta, setReceta }) {
  const [recipeName, setRecipeName] = useState(false);
  const [recipeLoad, setRecipeLoad] = useState(false);
  const [recipeStatus, setStatus] = useState(false);

  const handleSaveRecipe = async () => {
    setRecipeName(false);
    setRecipeLoad(true);
    const res = await axios
      .post("/api/recipes/", {
        recipe_detail: receta,
        recipe_name: recipeName,
        id_user: 1,
      })
      .then((data) => {
        setRecipeLoad(false);
        setStatus("succes");
      })
      .catch((err) => {
        console.log({ err });
        setRecipeLoad(false);
        setStatus("error");
      });
  };

  return (
    <>
      {recipeName && (
        <Flex
          w={"100vw"}
          h="100vh"
          bg={"#0003"}
          alignItems="center"
          justifyContent={"center"}
          zIndex="200"
          position={"fixed"}
        >
          <Flex
            w={["100vw", "100vw", "500px", "600px"]}
            h="300px"
            alignItems="center"
            justifyContent={"center"}
            bg="mainColors.200"
            flexDir={"column"}
            p="0 50px"
          >
            <Text fontSize={"18px"} fontWeight="bold" color={"mainColors.300"}>
              Ingresa un nombre para la receta
            </Text>
            <Input
              placeholder="Nombre..."
              mt={"2%"}
              onChange={({ target }) => setRecipeName(target.value)}
            />
            <Flex justifyContent={"space-between"} w="50%" mt={"5%"}>
              <Flex
                className={styles.button2}
                onClick={() => setRecipeName(false)}
              >
                Volver
              </Flex>
              <Flex
                className={
                  recipeName && recipeName.length > 3
                    ? styles.button2
                    : styles.buttonDisabled
                }
                onClick={() => {
                  if (recipeName && recipeName.length > 3) handleSaveRecipe();
                }}
                _disabled={true}
              >
                Guardar
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
      <Flex className={styles.container}>
        {receta === "loading" ? (
          <Flex className={styles.spinnerContainer}>
            {/* <ActivityIndicator size="large" color="#FFF" /> */}
            <Text
              className={styles.text}
              style={{ fontSize: "18px", marginTop: "15px" }}
            >
              Generando receta...
            </Text>
          </Flex>
        ) : (
          <Flex flexDir={"column"} w="90vw" h={"100%"}>
            <div className={styles.textContainer}>
              <div
                className={styles.preview}
                dangerouslySetInnerHTML={{ __html: marked.parse(receta) }}
              ></div>
            </div>
            <Flex className={styles.buttonContainer}>
              <Flex></Flex>
              <Flex className={styles.button} onClick={() => setReceta(null)}>
                Volver
              </Flex>
              <Flex
                className={styles.button}
                onClick={() => {
                  if (recipeStatus && recipeStatus === "succes")
                    setReceta(null);
                  else setRecipeName("set");
                }}
              >
                {recipeLoad ? (
                  <Spinner color="#fff" />
                ) : recipeStatus && recipeStatus === "succes" ? (
                  <Icon as={CheckIcon} />
                ) : recipeStatus && recipeStatus === "error" ? (
                  <Icon as={CloseIcon} />
                ) : (
                  "Guardar"
                )}
              </Flex>
              <Flex></Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
}
