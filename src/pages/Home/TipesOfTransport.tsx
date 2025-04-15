import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { FaPersonChalkboard } from "react-icons/fa6";
import { RiShipFill } from "react-icons/ri";

type typeOfTrasport = {
  icon: ReactElement;
  title: string;
  content: string;
};

type Props = {};
const typeOfTrasport = [
  {
    icon: <BsFillAirplaneEnginesFill color="grey" size="lg" />,
    title: "Transporte Aéreo de Carga",
    content:
      "Somos una agencia de carga con capacidad de poder gestionar y tramitar cargas vía aérea directamente, eso se da gracias a que estamos acreditados como agentes IATA (International Air Transport Association)",
  },
  {
    icon: <RiShipFill color="grey" size="lg" />,
    title: "Transporte Marítimo de carga",
    content:
      "Trabajamos con las mejores compañías para poder transportar contenedores (FCL), cargas especiales (carga suelta refrigerada, sobredimensionada, etc) y carga consolidada (LCL) Glesener Cargo es tu mejor opción en cuanto a empresas de transporte de carga",
  },
  {
    icon: <FaPersonChalkboard color="grey" size="lg" />,
    title: "Agencia de Carga Internacional",
    content:
      "   Nuestro equipo cuenta con amplio conocimiento tanto en gestión aduanera como en gestión logística para los envíos internacionales, eso nos permite ofrecer un servicio de asesoría de acuerdo a sus necesidades. ",
  },
];

function characteris({}: Props) {
  return (
    <>
      {typeOfTrasport.map((c) => (
        <Box key={c.title} p={5}>
          <Stack>
            <Box
              maxW={"445px"}
              w={"full"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"150px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                {c.icon}
              </Box>

              <Heading
                mt={10}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                <Text textAlign={"center"}>{c.title}</Text>
              </Heading>
              <Text textAlign={"center"} color={"gray.500"}>
                {c.content}
              </Text>
            </Box>
          </Stack>
        </Box>
      ))}
    </>
  );
}

export default characteris;
