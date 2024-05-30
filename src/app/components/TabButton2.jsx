import React from "react";

const TabButton2 = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white opacity-100" : "text-[#ADB7BE] opacity-60";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-medium text-sm hover:text-white hover:opacity-100 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton2;