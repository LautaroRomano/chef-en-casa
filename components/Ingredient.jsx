import { Text, Flex } from "@chakra-ui/react";
import styles from '../src/styles/Ingredient.module.css'

export default function App({ ico, name, onClick, active }) {
  return (
    <Flex className={active ? styles.containerBorder : styles.container} onClick={onClick} >
      <Text className={styles.icon}>{ico}</Text>
      <Text className={styles.name}>{name}</Text>
    </Flex >
  );
}

