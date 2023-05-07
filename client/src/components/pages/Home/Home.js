import React from "react";
import TopBar from "../../home-topBar";
import HomeSlider from "../../home-slider";
// Footer Components
import HomeFooterJoinUs from "../../home-footer-joinUs";
import Footer from "../../Footer";
import GlobalStyle from "../../GlobalStyle";
import HomePopularTag from "../../home-popular-tag";
import HomeRepertoire from "../../home-repertoire";
import HomeComposer from "../../home-composer";
import HomeInstrument from "../../home-instrument";

import SearchBar from "../../home-searchBar";
import sharePic from "../../img/piece.png";
const home = () => {
  return (
   
      <div className='App'>
          <br/><br/><br/><br/><br/><br/><br/>
      <header>
        <GlobalStyle />
        <TopBar />
        <HomeSlider />
      </header>

      <main>

        {/*<HomePopularTag />*/}
        <HomeRepertoire />
        <HomeComposer />
        <HomeInstrument />
      </main>

          <br/>
          <div className="sharethis-inline-share-buttons" data-url="https://www.facebook.com/coreliaproject/" data-title="Corelia project" data-image={sharePic} data-description="Corelia project aims to build a centralised database for female composers" data-message="Hey look what I found, this website is awesome, check it out!" data-email-subject="I wanna share this with you"></div>
          <br/>
      <footer>
        <HomeFooterJoinUs />
        <Footer />
      </footer>
    </div>
    
  );
};
//pic sources:
//https://stock.adobe.com/search?k=placeholder
//https://www.vectorstock.com/royalty-free-vector/person-gray-photo-placeholder-woman-vector-24138233
//https://www.wxxinews.org/local-news/2022-06-23/jazz-fest-musical-instrument-drive-returns
//https://www.istockphoto.com/photo/vintage-vinyl-record-album-cover-mockup-flat-concept-gm1127565686-297232089
export default home;
