import { Routes, Route } from "react-router-dom";

import OutletPage from "./pages/Outlet";
import MenuPage from "./pages/Menu";
import AccountPage from "./pages/Account";
import MorePage from "./pages/More";

import Navbar from "./component/Navbar";
import Cartico from "./component/Cartico";
import MyCart from "./pages/MyCart";
import Address from "./pages/account/Address";
import Logout from "./pages/account/Logout";
import Orders from "./pages/account/Orders";
import Profile from "./pages/account/Profile";

import Credit from "./pages/account/Credit";
import Points from "./pages/account/Points";
import Coupon from "./pages/account/Coupon";

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

          <Route path="/account/Orders" element={<Orders />} />
          <Route path="/account/Address" element={<Address />} />
          <Route path="/account/Profile" element={<Profile />} />
          <Route path="/account/Logout" element={<Logout />} />

          <Route path="/account/Credit" element={<Credit />} />
          <Route path="/account/Points" element={<Points />} />
          <Route path="/account/Coupon" element={<Coupon />} />
        </Routes>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
