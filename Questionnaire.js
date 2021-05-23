import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  Flex,
  FormErrorMessage,
  Text,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function Questionnaire() {
  const { handleSubmit, errors, register, formState } = useForm();

  function validateWalletAddress(value) {
    if (!value) {
      return "Address is required";
    } else return true;
  }

  function validateFirstName(value) {
    if (!value) {
      return "First name is required";
    } else return true;
  }

  function validateLastName(value) {
    if (!value) {
      return "Last name is required";
    } else return true;
  }

  function validateNftTitle(value) {
    if (!value) {
      return "NFT Title is required";
    } else return true;
  }

  function validateDeliveryDate(value) {
    if (!value) {
      return "NFT Title is required";
    } else return true;
  }

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 1000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl colorScheme="orange" isInvalid={errors.walletAddress}>
        <Input
          focusBorderColor="cyan.500"
          name="walletAddress"
          placeholder="Wallet Address"
          ref={register({ validate: validateWalletAddress })}
        />
        <FormErrorMessage>
          {errors.walletAddress && errors.walletAddress.message}
        </FormErrorMessage>
      </FormControl>
      <Flex>
        <FormControl mt="1rem" mr="1rem" isInvalid={errors.firstName}>
          <Input
            focusBorderColor="cyan.500"
            name="firstName"
            placeholder="First Name"
            ref={register({ validate: validateFirstName })}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mt="1rem" isInvalid={errors.lastName}>
          <Input
            focusBorderColor="cyan.500"
            name="lastName"
            placeholder="Last Name"
            ref={register({ validate: validateLastName })}
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex mt="2rem" alignItems="center" direction="column">
        <Text fontWeight="bold">What kind of NFT are you minting?</Text>
        <Select colorScheme="cyan" mt="1rem">
          <option value="1">Digital NFT</option>
          <option value="2">Physical NFT</option>
          <option value="3">Copyright NFT</option>
        </Select>
        <Text w="30rem" mt="2rem" fontWeight="bold">
          Do you want to add a condition before effective delivery and
          possession of the creation by the NFT buyer?
        </Text>
        <Select colorScheme="cyan" mt="1rem">
          <option value="1">Yes</option>
          <option value="2">No</option>
        </Select>
        <FormControl mt="1rem" isInvalid={errors.deliveryDate}>
          <Input
            focusBorderColor="cyan.500"
            name="deliveryDate"
            placeholder="Delivery after a Specific Date"
            ref={register({ validate: validateDeliveryDate })}
          />
          <FormErrorMessage>
            {errors.deliveryDate && errors.deliveryDate.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mt="1rem" isInvalid={errors.nftTitle}>
          <Input
            focusBorderColor="cyan.500"
            name="nftTitle"
            placeholder="Title of NFT"
            ref={register({ validate: validateNftTitle })}
          />
          <FormErrorMessage>
            {errors.nftTitle && errors.nftTitle.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mt="1rem">
          <Input
            focusBorderColor="cyan.500"
            name="titlePhysicalGood"
            placeholder="Title o Physical Good"
          />
        </FormControl>
        <FormControl mt="1rem">
          <Input
            focusBorderColor="cyan.500"
            name="supportPhysicalGood"
            placeholder="Support of Physical Good (wood, plastic, metals, etc.)"
          />
        </FormControl>
        <FormControl mt="1rem">
          <Input
            focusBorderColor="cyan.500"
            name="sizePhysicalGood"
            placeholder="Size of Physical Good"
          />
        </FormControl>
        <FormControl mt="1rem">
          <Input
            focusBorderColor="cyan.500"
            name="achievementDate"
            placeholder="Achievement date"
          />
        </FormControl>
        <FormControl mt="1rem">
          <Input
            focusBorderColor="cyan.500"
            name="signatureLocation"
            placeholder="Signature Location"
          />
        </FormControl>
      </Flex>
      <Button mt={4} isLoading={formState.isSubmitting} type="submit">
        Mint NFT
      </Button>
    </form>
  );
}
