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
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Agente de Carga Aérea y Marítima",
    content:
      "Desde la recepción hasta la salida de la mercadería, nos aseguramos de que todo fluya sin problemas. Somos tu socio confiable en el comercio global.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Regímenes Aduaneros",
    content:
      "Manejamos todo tipo de regímenes, desde importación y exportación definitiva hasta regímenes temporales. Simplificamos los trámites aduaneros para ti.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Asesoría Personalizada",
    content:
      "Te asesoramos en tiempo real. Puedes realizar tus consultas mediante los diferentes canales que manejamos: WhatsApp, Llamadas telefónicas o por el Formulario de Contacto.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1482351437900-d57cf1b9cd37?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Consolidación de Carga Aérea y Marítima",
    content:
      "¿Tienes envíos pequeños? No te preocupes, nosotros los agrupamos para que aproveches economías de escala y reduzcas costos.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661559051049-f9e147c7a90b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Servicios de Aduanas",
    content:
      "Nuestro equipo de expertos se ocupará de todos los detalles aduaneros, de esa manera tú puedas concentrarte en hacer crecer tu negocio.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661329930662-19a43503782f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Regímenes Suspensivos",
    content:
      "Sabemos que a veces necesitas tiempo extra. Tus productos entran en un limbo aduanero seguro. No se exige el impuesto hasta que decidas liberarlos.",
  },
];

function BodyTransport({}: Props) {
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
                h={{ base: "220px", ms: "270px", md: "320px" }}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  h={{ base: "220px", ms: "270px", md: "320px" }}
                  src={c.image}
                />
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

export default BodyTransport;
