import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBookOpen, FaMap } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import { IoMdTime } from "react-icons/io";
import Maps from "./Maps";

type Props = {};

function HeroContacts({}: Props) {
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
              Contáctanos <br />
            </Heading>
            <Text
              fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
              color={"white"}
            >
              Descubre cómo Glesener Cargo puede hacer que tus operaciones sean
              más eficientes y exitosas.
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
      <SimpleGrid mt={10} columns={[1, null, 2]} spacing={10}>
        <Container>
          <Heading
            mt={5}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            lineHeight={"110%"}
            color={"blue.400"}
          >
            <Text>Agentes de Carga</Text>
          </Heading>
          <Stack mt={10} direction="row">
            <Box m={4}>
              <IoMdMail size={"30px"} />
            </Box>
            <Box>
              <Text>
                {" "}
                Email <br />
                counter@glesener.com.pe
              </Text>
            </Box>
          </Stack>

          <Stack direction="row">
            <Box m={4}>
              <FaPhoneVolume size={"30px"} />
            </Box>
            <Box>
              <Text>
                {" "}
                Teléfonos <br />
                (01) 484-7513 │ 997-508-825
              </Text>
            </Box>
          </Stack>
          <Stack direction="row">
            <Box m={4}>
              <IoMdTime size={"30px"} />
            </Box>
            <Box>
              <Text>
                {" "}
                Horario de atención <br />
                Lunes a Viernes 9 am a 5 pm
              </Text>
            </Box>
          </Stack>
          <Stack direction="row">
            <Box m={4}>
              <FaMap size={"30px"} />
            </Box>
            <Box>
              <Text>
                {" "}
                Dirección <br />
                Centro Aéreo Comercial Sector B Segunda Etapa Modulo C Oficina
                115, Callao – Perú (frente al Aeropuerto Internacional Jorge
                Chávez)
              </Text>
            </Box>
          </Stack>
        </Container>

        <Container>
          <form>
            <Container borderRadius={5} color={"grey.400"}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input type="name" />
              </FormControl>
              <FormControl>
                <FormLabel>Apellido</FormLabel>
                <Input type="lastname" />
              </FormControl>
              <FormControl>
                <FormLabel>Teléfono</FormLabel>
                <Input type="NumberPhone" />
              </FormControl>
              <FormControl>
                <FormLabel>Asunto</FormLabel>
                <Input type="Affair" />
              </FormControl>
              <FormControl>
                <FormLabel>Mensaje</FormLabel>
                <Textarea h="150px" />
              </FormControl>
            </Container>
            <Button
              mt={5}
              marginLeft={3}
              textAlign={"center"}
              colorScheme="teal"
              size="sm"
            >
              Enviar
            </Button>
          </form>
        </Container>
      </SimpleGrid>

      <Container mt={10} justifyItems={"center"}>
        <Maps />
      </Container>
      <SimpleGrid mt={10} columns={[1, null, 2]} pt={0}>
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
        mt={5}
        width={"100%"}
        borderTopWidth={1}
        borderStyle={"solid"}
        bg={"blue.600"}
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

export default HeroContacts;
