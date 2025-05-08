import React from "react";

const Icon = ({
  icons: IconComponent,
  bgColor = "bg-redShade",
  iconColor = "text-primary",
}) => {
  return (
    <div
      className={`flex w-10 h-10 justify-center items-center border border-border ${bgColor} backdrop-blur p-1 rounded-md border-solid`}
    >
      <IconComponent className={`${iconColor} w-6 h-auto`} />
    </div>
  );
};

export default Icon;
