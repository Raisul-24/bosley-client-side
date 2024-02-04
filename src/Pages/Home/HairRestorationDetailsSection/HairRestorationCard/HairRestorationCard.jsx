import React from 'react';

const HairRestorationCard = ({hairRestorationCardData}) => {
    const {title, description, icon, buttonContent} = hairRestorationCardData;
    return (
        <div className="card shadow-xl bg-[#1B3663] rounded-lg p-12 gap-6">
  <div className="justify-start"><img src={icon} alt="Shoes" /></div>
  <div className="card-body text-white p-0 gap-4">
    <h2 className="card-title text-lg">{title}</h2>
    <p className="text-sm">{description}</p>
    <div className="card-actions">
      <button className="btn bg-[#DFEFFC] text-black shadow-none rounded-sm">{buttonContent}</button>
    </div>
  </div>
</div>
    );
};

export default HairRestorationCard;