import Home from "./Pages/Home/Home";
import CityBreaks from "./Pages/CityBreaks/CityBreaks";
import Destinatios from "./Pages/Destinatios/Destinatios";
import Holidays from "./Pages/Holidays/Holidays";
let routes = [
  { path: '/', element: <Home /> },
  { path: "/cityBreaks", element: <CityBreaks /> },
  { path: "/holidays", element: <Holidays /> },
  { path: "/destinatios", element: <Destinatios /> },
];
export default routes;
