
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Brand from "./pages/Brand";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brand" element={<Brand />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
