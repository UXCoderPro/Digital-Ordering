import React from "react";
import Icon from "./Icon";

const CrmInfo = ({
  icon,
  bgColor,
  iconColor,
  title,
  value,
  valueColor = "text-[#49be30]",
}) => {
  return (
    <div className="flex w-full h-16 justify-start gap-3 items-center shrink-0 border border-border bg-white px-2 py-1.5 rounded-lg border-solid">
      <Icon icons={icon} bgColor={bgColor} iconColor={iconColor} />
      <div className="flex flex-col gap-0 justify-center items-center">
        <p className="text-textDark font-sfText text-sm font-medium leading-normal ">
          {title}
        </p>
        <h2
          className={`${valueColor} font-sfDisplay text-base font-medium leading-normal`}
        >
          {value}
        </h2>
      </div>
    </div>
  );
};

export default CrmInfo;
