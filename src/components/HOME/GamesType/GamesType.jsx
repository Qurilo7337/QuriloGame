import React from 'react';
import './GamesType.css';
import { IoGameControllerOutline } from "react-icons/io5";
import { IoGitNetworkOutline } from "react-icons/io5";

const gameTypes = [
  {
    imgSrc: "https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/instant-win_20220712163639_0.svg",
    altText: "Instant Games",
    label: "Instant Games"
  },
  {
    imgSrc: "https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/icon-baccarat_20231205195508_0.png",
    altText: "Black Jack",
    label: "Black Jack"
  },
  {
    imgSrc: "https://cdn.aglty.io/bluechip-prod-v2/icons/mainpage/slots_21.png",
    altText: "Slots",
    label: "Slots"
  },
  {
    imgSrc: "https://cdn.aglty.io/bluechip-prod-v2/icons/mainpage/icon-jackpot.png",
    altText: "Jackpot",
    label: "Jackpot"
  },
  {
    imgSrc: "https://cdn.aglty.io/bluechip-prod-v2/icons/mainpage/icon-tablegames.png",
    altText: "Table",
    label: "Table"
  }
];

function GamesType() {
  return (
    <div className='px-md-5 px-3'>
      <div className='row'>
        {gameTypes.map((game, index) => (
          <div key={index} className='col mx-1 d-none d-md-flex text-white py-2 px-3 d-flex justify-content-center align-items-center SSA_GAmesTypeCard'>
            <img src={game.imgSrc} alt={game.altText} width={28} /> &nbsp;
            <div className='SSA_font-16px'>{game.label}</div>
          </div>
        ))}
           <div className='col mx-1 d-flex d-md-none text-white py-2 px-3 d-flex justify-content-center align-items-center SSA_GAmesTypeCard'>
         <IoGameControllerOutline /> &nbsp;  &nbsp;
            <div className='SSA_font-16px'>Search</div>
          </div>
         <div className='col mx-1 text-white py-2 px-3 d-flex justify-content-center align-items-center SSA_GAmesTypeCard'>
         <IoGameControllerOutline /> &nbsp;  &nbsp;
            <div className='SSA_font-16px'>Games</div>
          </div>
          <div className='col mx-1 text-white py-2 px-3 d-flex justify-content-center align-items-center SSA_GAmesTypeCard'>
          <IoGitNetworkOutline />
 &nbsp;  &nbsp;
            <div className='SSA_font-16px '>Providers</div>
          </div>
      </div>
    </div>
  );
}

export default GamesType;
