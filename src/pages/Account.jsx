import React from "react";
import { MdCall } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import brand from "../assets/brand.jpg";
import Qr from "../assets/Qr.png";
import Icon from "../component/account/Icon";
import CrmInfo from "../component/account/CrmInfo";
import { FaSackDollar } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BiSolidCoupon } from "react-icons/bi";

const Account = () => {
  return (
    <div className="bg-bgShade w-full h-screen overflow-y-auto scrollbar-hide px-4 ">
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
        />
        <CrmInfo
          icon={FaHandHoldingDollar}
          bgColor="bg-[rgba(33,150,243,0.30)]"
          iconColor="text-[#2196F3]"
          title="Points"
          value="150"
          valueColor="text-[#2196F3]"
        />
        <CrmInfo
          icon={BiSolidCoupon}
          bgColor="bg-[rgba(255,166,77,0.30)]"
          iconColor="text-[#FFA64D]"
          title="Coupon"
          value="10"
          valueColor="text-[#FFA64D]"
        />
      </div>
    </div>
  );
};

export default Account;
