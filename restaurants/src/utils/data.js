import About from "../core/About";
import { Home } from "../core/Home";

export const routes = [
  {
    path: "/",
    loader: <Home />,
    isUseParamContext: true,
  },
  {
    path: "/about",
    loader: <About />,
    isUseParamContext: false,
  },
];

export const priceChoices = ["", "$", "$$", "$$$", "$$$$", "$$$$$"];

export const categoryChoices = [
  "",
  "Italia",
  "Sop",
  "Modern",
  "Bali",
  "Jawa",
  "Spanyol",
  "Sunda",
];
