import { IGallery } from "../components/interfaces";
import {
  poetadaAlcaliv,
  nolitaIa,
  portadaElgorrioncillo,
  portadaNivea,
  portadaRelmed,
  portadaRiablo,
  portadaZumitam,
} from "./index";

export const projectList: IGallery[] = [
  {
    title: "Nolita-IA",
    description:
      "Campaña navideña de Nolita CUU, usando IA para destacar la moda de invierno y potenciar las ventas de fin de año",
    image: nolitaIa,
    index: 0,
    href: "https://www.instagram.com/p/C1a1ExYrSrC/?hl=es",
  },
  {
    title: "Agua Alcaliv",
    description:
      "Comerciales de verano para Alcaliv, transmitiendo frescura y vitalidad, ideales para la temporada.",
    image: poetadaAlcaliv,
    index: 1,
    href: "https://www.instagram.com/p/CtfGkWFsWhC/?hl=es",
  },

  {
    title: "El Gorrioncillo",
    description:
      "Linea de lanzamiento de las nuevas presentaciones del Sotol El Gorrioncillo",
    image: portadaElgorrioncillo,
    index: 2,
    href: "https://www.instagram.com/p/CqHOUQRj90S/?hl=es",
  },
  {
    title: "Nivea",
    description:
      "Comercial de lanzamiento para los bloqueadores solares de Nivea y sus nuevas presentaciones",
    image: portadaNivea,
    index: 3,
    href: "https://www.tiktok.com/@edgarbaylon/video/7364557302424276232",
  },
  {
    title: "Realme",
    description:
      "Video de lanzamiento del Realme 12 Pro+, aprovechando su innovadora cámara en cada toma.",
    image: portadaRelmed,
    index: 4,
    href: "https://www.instagram.com/p/C3TsLHfL73Q/?hl=es",
  },
  {
    title: "Riablo",
    description:
      "Campaña de expancion del Sotol Riablo a Estados unidos (Arizona, Texas, Luisiana).",
    image: portadaRiablo,
    index: 5,
    href: "https://www.instagram.com/p/CupjYxPNzSy/?hl=es",
  },

  // {
  //   title: "Zumitam",
  //   description:
  //     "Campaña de lanzamiento para la linea fuego de los productos Zumitam",
  //   image: portadaZumitam,
  //   index: 2,
  // href: "https://www.instagram.com/p/CqHOUQRj90S/?hl=es",
  // },
];
