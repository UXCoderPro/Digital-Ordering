import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdCall } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import brand from "../assets/brand.jpg";
import Qr from "../assets/Qr.png";
import Icon from "../component/account/Icon";
import CrmInfo from "../component/account/CrmInfo";
import { FaSackDollar } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BiSolidCoupon } from "react-icons/bi";
import { TiUser } from "react-icons/ti";
import { GiMilkCarton } from "react-icons/gi";
import { PiAddressBookFill } from "react-icons/pi";
import { MdOutlineLogin } from "react-icons/md";

const Account = () => {
  const navigate = useNavigate();

  const fadeInVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="bg-bgShade w-full h-screen overflow-y-auto scrollbar-hide px-4 pb-12">
      <h2 className="text-textDark font-sfDisplay text-lg font-semibold leading-normal   mt-7 ">
        My Account
      </h2>

      <div className="w-full mt-6  flex justify-between items-center shrink-0 border border-border bg-white px-3.5 py-4 rounded-xl border-solid">
        <div className="flex items-center gap-3.5 h-full w-auto">
          <img
            src={brand}
            alt="outlet"
            className="h-16 w-16 rounded-full bg-cover bg-center object-cover"
          />
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-textDark font-sfDisplay text-base font-semibold leading-normal">
              Stay Chill Cafe
            </h1>
            <p className="font-sfText text-textDark text-sm font-normal leading-normal">
              Open Time: 11:00am - 12:00pm
            </p>
          </div>
        </div>
        <Icon icons={MdCall} bgColor="bg-redShade" iconColor="text-primary" />
      </div>

      <div className="w-full bg-account-bg bg-center bg-cover object-cover shrink-0 flex justify-between items-center px-3.5 py-10 mt-6 rounded-xl ">
        <img src={Qr} alt="WarelyQr" className="w-28 h-auto cursor-pointer" />
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-4">
            <h1 className="text-white text-right font-sfDisplay text-base font-medium leading-normal">
              Abdul Aziz V I
            </h1>
            <Icon
              icons={FaUserTie}
              bgColor="bg-primary"
              iconColor="text-white"
            />
          </div>
          <div className="flex items-center gap-4">
            <p className="text-white text-right font-sfDisplay base font-medium leading-normal">
              +91 7904332064
            </p>
            <Icon icons={MdCall} bgColor="bg-primary" iconColor="text-white" />
          </div>
        </div>
      </div>

      <div className="w-full justify-between grid grid-cols-3 grid-rows-1 gap-5 items-center mt-7 ">
        <CrmInfo
          icon={FaSackDollar}
          bgColor="bg-[rgba(73,190,48,0.30)]"
          iconColor="text-[#49be30]"
          title="Credit"
          value="2500"
          valueColor="text-[#49be30]"
          route="/account/Credit"
        />
        <CrmInfo
          icon={FaHandHoldingDollar}
          bgColor="bg-[rgba(33,150,243,0.30)]"
          iconColor="text-[#2196F3]"
          title="Points"
          value="150"
          valueColor="text-[#2196F3]"
          route="/account/Points"
        />
        <CrmInfo
          icon={BiSolidCoupon}
          bgColor="bg-[rgba(255,166,77,0.30)]"
          iconColor="text-[#FFA64D]"
          title="Coupon"
          value="10"
          valueColor="text-[#FFA64D]"
          route="/account/Coupon"
        />
      </div>

      <motion.div
        className="flex mt-7 w-full h-auto flex-col gap-4 justify-between items-center shrink-0 border border-border bg-white px-5 py-3 rounded-lg"
        initial="initial"
        animate="animate"
        variants={fadeInVariant}
      >
        {[
          {
            icon: GiMilkCarton,
            title: "My Orders",
            desc: "Review & Access Order History",
            route: "/account/orders",
          },
          {
            icon: TiUser,
            title: "Personal Details",
            desc: "Check your personal Details",
            route: "/account/Profile",
          },
          {
            icon: PiAddressBookFill,
            title: "Address",
            desc: "Organize & Maintain Delivery Address",
            route: "/account/Address",
          },
          {
            icon: MdOutlineLogin,
            title: "Logout",
            desc: "Logout from this Device",
            route: "/account/Logout",
          },
        ].map(({ icon, title, desc, route }, index) => (
          <motion.div
            key={index}
            className="w-full h-auto p-1 flex items-start justify-start gap-4 cursor-pointer"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate(route)}
          >
            <Icon icons={icon} bgColor="bg-redShade" iconColor="text-primary" />
            <div className="flex flex-col gap-2">
              <h1 className="text-textDark text-base font-sfDisplay font-semibold leading-normal">
                {title}
              </h1>
              <p className="text-[#595959] font-sfText text-xs leading-normal font-normal">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Account;
