import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

const DateTimeLocation = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = { state: "New Delhi", country: "In" };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-lg flex flex-col font-mono">
      <span className="flex items-center ">
        <FontAwesomeIcon icon={faLocationCrosshairs} />
        {location.state},{location.country}
      </span>
      <span>{currentTime.toLocaleTimeString()} IST</span>
    </div>
  );
};

export default DateTimeLocation;
