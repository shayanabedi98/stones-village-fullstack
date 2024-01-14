import { Route, BrowserRouter, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Inventory from "./components/Inventory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
