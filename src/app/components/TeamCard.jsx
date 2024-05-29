import React from "react";

const TeamCard = ({ imgUrl, title, description}) => {
  return (
    <div className="hover:scale-110 transition-transform duration-300">
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
  <div
  className="w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden relative group"
  style={{
    background: `url(${imgUrl})`,
    backgroundSize: "155%",
    backgroundPosition: "left -90px top -10px",
  }}
></div>

</div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-white mt-1 bg-transparent py-6">
          <h5 className="text-xl font-bold mb-1 text-center">{title}</h5>
          <p className="text-[#ADB7BE] text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
