import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import GlobalLayout from "./Components/GlobalLayout";
import Home, { loadCountriesData } from "./Components/Home";
import Country, { loadCountryData } from "./Components/Country";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route loader={loadCountriesData} index element={<Home />}></Route>
      <Route
        path=":name"
        loader={loadCountryData}
        element={<Country />}
      ></Route>
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
