import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

type typeOfTrasport = {
  icon: ReactElement;
  title: string;
  content: string;
};
const baseicon = <IoMdCheckmarkCircleOutline color="black" size={"lg"} />;
type Props = {};
const typeOfTrasport = [
  {
    icon: baseicon,
    title: "Experiencia Comprobada",
    content:
      "Con más de 18 años en el mercado peruano, sabemos cómo navegar el mundo de la logística internacional.",
  },
  {
    icon: baseicon,
    title: "Creatividad e Innovación",
    content:
      "No somos solo una empresa; somos un equipo apasionado que busca soluciones únicas para cada cliente.",
  },
  {
    icon: baseicon,
    title: "Seguridad y Tecnología",
    content:
      "Desde la seguridad de tus envíos hasta la eficiencia en los procesos, estamos a la vanguardia.",
  },
];

function Experience({}: Props) {
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

export default Experience;
