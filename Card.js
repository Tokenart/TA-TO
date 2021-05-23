import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import CardDesc from "./CardDesc";

export default function Card({ img, title, price }) {
  return (
    <Flex direction="column">
      <Box
        boxShadow="0 0.125rem 0 rgb(65 61 69 / 20%)"
        padding="1rem"
        borderRadius="0.2rem"
        h="25rem"
        w="20rem"
        m="1rem"
        background="white"
        border="1.5px solid grey"
      >
        <Image objectFit="cover" h="100%" w="100%" src={img} />
      </Box>
      <CardDesc title={title} price={price} />
    </Flex>
  );
}
