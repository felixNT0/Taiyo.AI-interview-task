import "./App.css";
import { useAppContext } from "./Contexts/useAppContext";
import { PageRoutes } from "./router/PageRoutes";

function App() {
  const { currentTab } = useAppContext();
  let Pages = PageRoutes(currentTab).Components;
  return <Pages />;
}

export default App;
