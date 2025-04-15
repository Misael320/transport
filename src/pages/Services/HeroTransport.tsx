import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import BodyTransport from "./BodyTransport";
import Experience from "./Experience";
import { FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type Props = {};

function HeroServis({}: Props) {
  return (
    <>
      <Flex
        background={`linear-gradient(
                rgba(0,0,0,0.7),
                rgba(0,0,0,0.7)
                ),
                url(https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
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
              Servicio de Transporte de Carga <br />
            </Heading>
            <Text
              fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
              color={"white"}
            >
              Nuestro servicio de transporte de carga internacional cuenta con
              alianzas estratégicas en todo el mundo
            </Text>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            ></Stack>
          </Stack>
        </Container>
      </Flex>
      <Heading
        mt={5}
        textAlign={"center"}
        fontWeight={600}
        fontSize={{ base: "1xl", sm: "3xl", md: "4xl" }}
        lineHeight={"110%"}
        color={"blue.600"}
      >
        <Text>Somos tu Socio Logístico</Text>
      </Heading>
      <Text
        mt={5}
        w={{ base: "80%", sm: "70%", md: "40%" }}
        ml={{ base: "10%", sm: "15%", md: "30%" }}
        textAlign={"center"}
        fontWeight={600}
        fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
        lineHeight={"110%"}
        color={"white.500"}
      >
        Actualmente contamos con una red de agentes a nivel mundial, eso nos
        permite atender solicitudes marítimas y aéreas, ofrecemos un servicio de
        transporte de carga internacional con los más altos niveles de calidad.
        No busques más, pulsa el botón de WhatsApp y conversa con nosotros, te
        vamos a asesorar de manera personalizada y te enviaremos una cotización.
      </Text>
      <Heading
        mt={20}
        textAlign={"center"}
        fontWeight={600}
        fontSize={{ base: "1xl", sm: "3xl", md: "4xl" }}
        lineHeight={"110%"}
        color={"white"}
      >
        <Text>Servicio de Transporte de Carga Internacional</Text>
      </Heading>
      <SimpleGrid
        justifyItems={"center"}
        p={"20px"}
        columns={[1, null, 3]}
        spacing={10}
      >
        <BodyTransport />
      </SimpleGrid>
      <Heading
        mt={5}
        textAlign={"center"}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        lineHeight={"110%"}
        color={"white"}
      >
        <Text>¿Por qué elegirnos?</Text>
      </Heading>
      <SimpleGrid
        justifyItems={"center"}
        p={"20px"}
        columns={[1, null, 3]}
        spacing={4}
      >
        <Experience />
      </SimpleGrid>
      <Flex
        background={`linear-gradient(
              rgba(0,0,0,0.7),
              rgba(0,0,0,0.7)
              ),
              url(https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
        backgroundSize={"cover"}
        w={"full"}
        h={"calc(100vh - 60px"}
      >
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 26 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              color={"white"}
            >
              ¡Hablemos! <br />
            </Heading>
            <Text
              fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
              color={"white"}
            >
              Llena nuestro formulario en línea o llámanos directamente. Tu
              próximo envío comienza aquí.
            </Text>
            <Stack
              direction={"column"}
              spacing={1}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                colorScheme={"green"}
                bg={"blue.400"}
                rounded={"full"}
                px={3}
                _hover={{
                  bg: "blue.500",
                }}
              >
                <NavLink to="/contacts">CONTACTÁNOS</NavLink>
              </Button>
            </Stack>
          </Stack>
        </Container>
        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        ></Box>
      </Flex>
      <SimpleGrid columns={[1, null, 2]} pt={0}>
        <Container maxW={"250px"}>
          <FaBookOpen size={"lg"} />
        </Container>
        <Container justifyContent={"center"} alignItems={"center"}>
          <Text
            pt={30}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
          >
            Centro Aéreo Comercial Sector B Segunda Etapa Modulo C <br />
            Oficina 115, Callao – Perú (frente al Aeropuerto Internacional{" "}
            <br /> Jorge Chávez)
          </Text>
        </Container>
      </SimpleGrid>
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "center" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© Glesener Cargo SRLtda 2025 - Derechos Reservados</Text>
        </Container>
      </Box>
    </>
  );
}

export default HeroServis;
