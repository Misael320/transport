"use client";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Goals from "./Goals";
import { FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <Flex
        background={`linear-gradient(
        rgba(0,0,0,0.7),
        rgba(0,0,0,0.7)
        ),
        url(https://plus.unsplash.com/premium_photo-1682146475853-006e062ca585?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
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
              <Text>
                Nosotros <br />
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
              color={"white"}
            >
              Somos un operador logístico enfocado en ser tu socio en
              operaciones de comercio exterior.
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
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
        color={"blue.400"}
      >
        <Text>¿Quiénes Somos?</Text>
      </Heading>
      <Center
        mt={5}
        textAlign={"center"}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        width={"cal"}
        w={{ base: "80%", sm: "70%", md: "40%" }}
        ml={{ base: "10%", sm: "15%", md: "30%" }}
        fontFamily={"body"}
      >
        <Text
          fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
          color={"white.500"}
        >
          Glesener Cargo S.R.Ltda esta asociada a Glesener Enterprise Group
          S.A.C. Con más de 18 años en el mercado, hemos logrado construir una
          reputación sólida. Somos apasionados por la logística y estamos
          comprometidos con la excelencia en cada operación de esa manera
          podemos brindarle a nuestros clientes un servicio de calidad. <br />
          La creatividad e innovación de nuestros trabajadores hacen que la
          empresa siga desarrollándose de manera sostenida en el ámbito del
          Comercio Exterior, Transporte de Carga Aéreo, Transporte Marítimo
          Internacional y Servicio de Aduanas. Brindamos asesoría personalizada
          a todos nuestros clientes.
        </Text>
      </Center>
      <Container mt={10} maxW={"6xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              color={"blue.600"}
              textAlign={"center"}
            >
              <Text>Misión</Text>
            </Heading>
            <Text
              fontSize={{ base: "1xl", sm: "2xl", md: "2xl" }}
              color={"white.500"}
              textAlign={"justify"}
            >
              <p>
                Conectar el Mundo, Mover el Futuro Nuestra misión es más que
                transportar mercancía. Somos los hilos invisibles que unen
                continentes, empresas y sueños. Nuestro compromiso es facilitar
                el comercio global, brindando soluciones logísticas confiables y
                eficientes.
              </p>
            </Text>
            <Heading
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              color={"blue.600"}
              textAlign={"center"}
            >
              <Text>Visión</Text>
            </Heading>
            <Text
              fontSize={{ base: "1xl", sm: "2xl", md: "2xl" }}
              color={"white.500"}
              textAlign={"justify"}
            >
              <p>
                Ser el Puente hacia el Éxito Visualizamos un mundo donde las
                distancias no sean obstáculos, sino oportunidades. Queremos ser
                el socio estratégico que impulse el crecimiento de nuestros
                clientes. Desde el corazón del Perú, extendemos nuestras alas al
                mundo entero.
              </p>
            </Text>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Heading
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        color={"blue.600"}
        textAlign={"center"}
      >
        <Text>Nuestros Objetivos</Text>
      </Heading>

      <SimpleGrid
        justifyItems={"center"}
        p={"20px"}
        columns={[1, null, 4]}
        spacing={4}
      >
        <Goals />
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
