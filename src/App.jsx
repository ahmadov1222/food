import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { Home } from "./pages/Home";
import "./assets/styles/main.scss";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
