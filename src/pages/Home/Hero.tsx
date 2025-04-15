"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Characteris from "./characteris";
import TipesOfTransport from "./TipesOfTransport";

export default function Hero() {
  return (
    <>
      <Flex
        background={`linear-gradient(
        rgba(0,0,0,0.7),
        rgba(0,0,0,0.7)
        ),
        url(https://plus.unsplash.com/premium_photo-1664695368767-c42483a0bda1?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
        backgroundSize={"cover"}
        w={"full"}
        h={"calc(100vh - 60"}
      >
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              color={"white"}
            >
              Grupo C&C Hermanos <br />
              <Text as={"span"} color={"blue.400"}>
                Transporte nacional
              </Text>
            </Heading>
            <Text color={"white"}>
              "Tu proyecto, nuestro transporte. ¡LISTOS PARA AVANZAR JUNTOS!"
            </Text>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                colorScheme={"green"}
                bg={"blue.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "blue.500",
                }}
              >
                <NavLink to="/contacts">CONTACTÁNOS</NavLink>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Flex>

      <Container maxW={"6xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              color={"blue.600"}
              textAlign={"justify"}
            >
              Somos expertos en Logística Internacional y Servicio de Transporte
            </Heading>
            <Text
              fontSize={{ base: "1xl", sm: "2xl", md: "2xl" }}
              color={"white.500"}
              textAlign={"justify"}
            >
              <p>
                ¿Necesitas mover mercancías de manera eficiente y segura? En C&C
                <strong>
                  {" "}
                  Hermanos somos líderes en logística internacional
                </strong>{" "}
                y contamos con un excelente
                <strong> Servicio de trasporte de carga</strong>.
              </p>
              <br />
              <p>
                Nos especializamos en hacer que tus envios internacionales sean
                un éxito. Tenemos más de 18 años de experiencia, somos una
                agencia de carga internacional confiable a nivel mundial.
                pertenecemos al grupo <strong> IATA </strong> un organización
                que{" "}
                <strong>
                  promueve la eficiencia y seguridad en la aviación.
                </strong>
              </p>
            </Text>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Heading
        textAlign={"center"}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        fontWeight={500}
        fontFamily={"body"}
      >
        ¿Por qué elegir Glesener?
      </Heading>

      <SimpleGrid
        justifyItems={"center"}
        p={"20px"}
        columns={[1, null, 3]}
        spacing={{ ms: "2", md: "10" }}
      >
        <Characteris />
      </SimpleGrid>
      <Heading
        mt={40}
        textAlign={"center"}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        fontWeight={500}
        fontFamily={"body"}
      >
        Somos una Empresa de Transporte de Carga Internacional
      </Heading>

      <SimpleGrid
        justifyItems={"center"}
        mt={10}
        p={"20px"}
        columns={[1, null, 3]}
        spacing={{ ms: "2", md: "10" }}
      >
        <TipesOfTransport />
      </SimpleGrid>
    </>
  );
}
