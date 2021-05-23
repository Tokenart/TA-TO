import React from "react";
import icon from "../assets/eth-icon.png";
import { Image, Flex, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1rem"
      borderBottom="1px solid grey"
    >
      <Image ml={5} src={icon} alt="Logo" />
      <Flex mr={10} align="center">
        <Link to="/questionnaire" style={{ marginRight: "1rem" }}>
          Questionnaire
        </Link>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Market
        </Link>
        <Button mr={7} onClick={toggleColorMode}>
          <MoonIcon />
        </Button>
        <Button>Connect Wallet</Button>
      </Flex>
    </Flex>
  );
}
