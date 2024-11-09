import { IGallery } from "../components/interfaces";
import {
  poetadaAlcaliv,
  nolitaIa,
  portadaElgorrioncillo,
  portadaNivea,
  portadaRelmed,
  portadaRiablo,
} from "./index";

export const projectList: IGallery[] = [
  {
    title: "Nolita-IA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
    image: nolitaIa,
    index: 0,
  },
  {
    title: "Agua Alcaliv",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
    image: poetadaAlcaliv,
    index: 1,
  },
  {
    title: "El Gorrioncillo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
    image: portadaElgorrioncillo,
    index: 2,
  },
  {
    title: "Nivea",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
    image: portadaNivea,
    index: 3,
  },
  {
    title: "Realme",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
    image: portadaRelmed,
    index: 4,
  },
  {
    title: "Riablo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.",
    image: portadaRiablo,
    index: 5,
  },
];
