import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import Home from "../components/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
