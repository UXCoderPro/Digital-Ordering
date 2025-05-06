import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OutletPage from "./pages/Outlet";
import MenuPage from "./pages/Menu";
import AccountPage from "./pages/Account";
import MorePage from "./pages/More";

import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen overflow-scroll ">
      <div className="w-full h-full">
        <MenuPage />
        <Router>
          <div>
            <Routes>
              <Route path="/outlet" element={<OutletPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/more" element={<MorePage />} />
            </Routes>
            <Navbar />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
