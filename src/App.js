import { Routes, Route } from "react-router-dom";

import OutletPage from "./pages/Outlet";
import MenuPage from "./pages/Menu";
import AccountPage from "./pages/Account";
import MorePage from "./pages/More";

import Navbar from "./component/Navbar";
import Cartico from "./component/Cartico";
import MyCart from "./pages/MyCart";

function App() {
  return (
    <div className="w-full min-h-screen overflow-scroll scrollbar-hide ">
      <div className="w-full h-full">
        <Routes>
          <Route path="/outlet" element={<OutletPage />} />
          <Route path="/" element={<MenuPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/" element={<Cartico />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/more" element={<MorePage />} />
        </Routes>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
