import Navbar from "./componets/Navbar";
import Home from "./pages/Home"
import Archive from "./pages/Archive";
import Response from "./pages/Response";
import {Route, Routes} from "react-router-dom";

function  App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/archive" element={<Archive /> } />
          <Route path="/response" element={<Response /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
