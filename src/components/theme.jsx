import { extendTheme } from "@chakra-ui/react";

 const theme = extendTheme({
    config:{
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
  colors: {
    brand: {
      100: "#868b6e", // Color de fondo claro
      900: "#333",   // Color de fondo oscuro
    },
  },
});

export default theme;