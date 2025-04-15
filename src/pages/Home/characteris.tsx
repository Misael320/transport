import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type caracteristicas = {
  image: string;
  title: string;
  content: string;
};

type Props = {};
const caracteristicas = [
  {
    image:
      "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?q=80&w=1490&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Eficiencia Garantizada",
    content:
      "Nuestro equipo altamente capacitado te da la total seguridad de que tus envíos internacionales lleguen a tiempo y sin complicaciones.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1620388640785-892616248ec8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Transparencia Absoluta",
    content:
      "No hay secretos ni sorpresas. Te mantenemos informado en cada paso del camino de tu envío, así evitamos preocupaciones.              ",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1683836722388-8643468c327d?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Red a nivel Mundial",
    content:
      "   Con agentes de carga en todo el mundo, conectamos continentes y hacemos que tus productos lleguen a su destino sin retrasos.          ",
  },
];

function characteris({}: Props) {
  return (
    <>
      {caracteristicas.map((c) => (
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
                h={{ base: "130px", ms: "280px", md: "300px" }}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  h={{ base: "210px", ms: "250px", md: "300px" }}
                  src={c.image}
                />
              </Box>

              <Heading
                textAlign={"center"}
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
