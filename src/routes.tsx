import PetTagsView from "./components/views/PetTags.tsx";
import PetListView from "./components/views/PetList.tsx";
import VistaAlta from "./components/views/Signup.tsx";

const childRoutes = [
  {
    path: "chapas",
    element: <PetTagsView />,
  },
  {
    path: "lista",
    element: <PetListView />,
  },
  {
    path: "altas",
    element: <VistaAlta />,
  },
];

export default childRoutes;
