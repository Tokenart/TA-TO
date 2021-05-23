import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
import Questionnaire from "../components/Questionnaire";

export default function QuestionnaireContainer() {
  return (
    <Flex align="center" direction="column">
      <Heading m={10} align="center" fontSize="6xl">
        Questionnaire
      </Heading>
      <Questionnaire />
    </Flex>
  );
}
