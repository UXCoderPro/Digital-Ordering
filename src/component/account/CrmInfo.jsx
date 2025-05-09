import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

const CrmInfo = ({
  icon,
  bgColor,
  iconColor,
  title,
  value,
  valueColor = "text-[#49be30]",
  route,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const duration = 1000; // 1 second
    const incrementTime = 10;
    const steps = Math.ceil(duration / incrementTime);
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplayValue(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  const handleClick = () => {
    if (route) navigate(route);
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-full h-16 justify-start gap-3 items-center shrink-0 border border-border bg-white px-2 py-1.5 rounded-lg border-solid cursor-pointer hover:shadow-md transition-all"
    >
      <Icon icons={icon} bgColor={bgColor} iconColor={iconColor} />
      <div className="flex flex-col gap-0 justify-start items-start">
        <p className="text-textDark font-sfText text-sm font-medium leading-normal">
          {title}
        </p>
        <h2
          className={`${valueColor} font-sfDisplay text-base font-medium leading-normal`}
        >
          {displayValue}
        </h2>
      </div>
    </div>
  );
};

export default CrmInfo;
