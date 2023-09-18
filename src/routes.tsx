import VistaChapas from "./components/Vistas/Chapas";
import VistaListas from "./components/Vistas/Listas";
import VistaAlta from "./components/Vistas/Alta";

const childRoutes = [
  {
    path: "chapas",
    element: <VistaChapas />,
  },
  {
    path: "lista",
    element: <VistaListas />,
  },
  {
    path: "altas",
    element: <VistaAlta />,
  },
];

export default childRoutes;
