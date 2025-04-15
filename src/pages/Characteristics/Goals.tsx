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
    title: "Excelencia Operativa",
    content:
      "Cada envío es una promesa. Nos esforzamos por superar expectativas, garantizando tiempos de entrega precisos y procesos sin complicaciones.",
  },
  {
    icon: baseicon,
    title: "Innovación Constante",
    content:
      "La logística evoluciona, y nosotros también. Buscamos soluciones creativas, adoptamos tecnologías avanzadas y anticipamos las necesidades del mañana.",
  },
  {
    icon: baseicon,
    title: "Impacto Positivo",
    content:
      "No solo movemos cajas; movemos comunidades. Nos comprometemos a operar de manera sostenible, cuidando el medio ambiente y apoyando causas sociales.",
  },
  {
    icon: baseicon,
    title: "Confianza Duradera",
    content:
      "Nuestro compromiso es brindar un trabajo eficiente y eficaz a todos nuestros clientes, es así como podemos generar la confianza necesaria que perdura en el tiempo.",
  },
];

function characteris({}: Props) {
  return (
    <>
      {typeOfTrasport.map((c) => (
        <Box key={c.title} p={5}>
          <Stack>
            <Box
              textAlign={"center"}
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
                <Text>{c.title}</Text>
              </Heading>
              <Text color={"gray.500"}>{c.content}</Text>
            </Box>
          </Stack>
        </Box>
      ))}
    </>
  );
}

export default characteris;
