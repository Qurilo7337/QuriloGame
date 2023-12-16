import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import SportsBelt from "./SportsBelt/SportsBelt";
import Box from "@mui/material/Box";
import MainSlider from "./MainSlider/slider";
import SportsBeltSlider from "./SportsBelt/SportsBeltSlider";
import GamesType from "./GamesType/GamesType";
import Footer from "../Footer/Footer";
import TopGames from "./TopGames/TopGames";
import TopGamesSlider from "./TopGames/TopGamesSlider";
import Popular from "./Popular/Popular";
import PopularSlider from "./Popular/PopularSlider";
import NewGames from "./NewGames/NewGames";
import NewGamesSlider from "./NewGames/NewGamesSlider";
import Discount from "./Discount/Discount";
import DiscountSlider from "./Discount/DiscountSlider";
import TVGames from "./TV-Games/TVGames";
import TVGamesSlider from "./TV-Games/TVGamesSlider";
import MessageButton from "../Float-btns/MessageButton";
function Home() {
  return (
    <Box className="SSA_ALL_BG_BLUE">
      <Navbar />
      <MainSlider />
      <GamesType />
    
      <MessageButton /> {/*----------message Button----------*/}

      {/*-----------------SportsBelt-----------------*/}
      <SportsBelt className="d-xs-none d-md-block" />  
      <SportsBeltSlider className="d-xs-block d-md-none"/>
      {/*-----------------TopGames-----------------*/}
      <TopGames />
      <TopGamesSlider/>
      {/*-----------------Popular-----------------*/}
      <Popular />
      <PopularSlider/>
      {/*-----------------NewGames-----------------*/}
      <NewGames />
      <NewGamesSlider />
      {/*-----------------Discount-----------------*/}
      <Discount />
      <DiscountSlider/>
{/*-----------------TVGames-----------------*/}
      <TVGames />
      <TVGamesSlider />

      <Footer /> 
    </Box>
  );
}

export default Home;
