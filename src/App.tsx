import "./App.css";
import GraphChartAndMapPage from "./Pages/ChartAndMap/ChartAndMapPage";
import ContactDetailPage from "./Pages/ContactDetail/ContactDetailPage";
import ContactListPage from "./Pages/ContactList/ContactListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllPageRoutesType } from "./types/AppPageRoutesType";

const AllPageRoutes: AllPageRoutesType[] = [
  { path: "/", element: <ContactListPage />, id: 1 },
  { path: "/contact-detail/:contactId", element: <ContactDetailPage />, id: 2 },
  { path: "/graph-and-map", element: <GraphChartAndMapPage />, id: 3 },
];

const router = createBrowserRouter(AllPageRoutes as any);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
