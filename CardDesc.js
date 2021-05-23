import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function CardDesc({ title, price }) {
  return (
    <Flex
      boxShadow="0 0.125rem 0 rgb(65 61 69 / 20%)"
      padding="1rem"
      borderRadius="0.2rem"
      h="5rem"
      w="20rem"
      m="0.5rem 1rem"
      border="1.5px solid grey"
      flexDirection="column"
    >
      <Text align="center" fontWeight="bold">
        {title}
      </Text>
      <Text mt="7px" fontSize="12px" align="center">
        {price}
      </Text>
    </Flex>
  );
}
