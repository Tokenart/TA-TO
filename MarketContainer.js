import React from "react";
import Card from "../components/Card";
import { Heading, Flex } from "@chakra-ui/react";
import img_01 from "../assets/img_01.png";
import img_02 from "../assets/img_02.png";
import img_03 from "../assets/img_03.png";
import img_04 from "../assets/img_04.png";

export default function MarketContainer() {
  const artDisplay = (
    <>
      <Card img={img_01} title="Purple Hipster" price="25 ETH" />
      <Card img={img_02} title="Vampire" price="10 ETH" />
      <Card img={img_03} title="Fire Yellow" price="1 ETH" />
      <Card img={img_04} title="Strings" price="8 ETH" />
    </>
  );

  return (
    <>
      <Flex direction="column" align="center">
        <Heading m={10} align="center" fontSize="6xl">
          Market
        </Heading>
        <Flex wrap="wrap">{artDisplay}</Flex>
      </Flex>
    </>
  );
}
