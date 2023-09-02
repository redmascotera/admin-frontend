import Test from "./components/Test/Test.tsx";

const childRoutes = [
  {
    path: "about",
    element: (
      <div style={{ color: "red", height: "100vh", width: "100vw" }}>
        <p>About</p>
      </div>
    ),
  },
  {
    path: "contact",
    element: (
      <div style={{ color: "red", height: "100vh", width: "100vw" }}>
        <p>Contact</p>
      </div>
    ),
  },
  {
    path: "test",
    element: <Test />,
  },
];

export default childRoutes;
