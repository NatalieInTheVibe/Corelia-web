import HomeListComposer from "./home-list-piece";

import reactImg from "../img/styled_components.jpg";
import htmlImg from "../img/html_css.jpg";
import dataImg from "../img/data_visualization.jpg";
import threeImg from "../img/threejs.jpg";
import cssAnimImg from "../img/css_animation.jpg";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const HomeRepertoire = () => {
  const courses = [
    {
      "_id": "633cc32856e324f2dac4f5e2",
      "name": "5 Duets",
      "composer": {
        "name": "Moszumanska-Nazar Krystyna",
        "_id": "633cc39a56e324f2dac4f708"
      },
      "duration": "10",
      "year": "1959",
      "instruments": "Flute, Clarinet",
      "recordingLink": "There is no information at this moment.",
      "publisher": "PWM",
      "scoreLink": "https://pwm.com.pl/pl/sklep/publikacja/5-duetow,krystyna-moszumanska-nazar,12589,ksiegarnia.htm",
      "image": "../../img/placeholder.png",

      tag: "Bestseller",
      tagColor: "#ffe799",
    },
    {
      "_id": "633cc32856e324f2dac4f65c",
      "name": "A Gift",
      "composer": {
        "name": "Tower Joan",
        "_id": "633cc39a56e324f2dac4f725"
      },
      "duration": "20",
      "year": "2007",
      "instruments": "Flute, Clarinet, Bassoon, Horn, Piano",
      "recordingLink": "There is no information at this moment.",
      "publisher": "There is no information at this moment.",
      "scoreLink": "There is no information at this moment.",
      "image": "../../img/placeholder.png"
     
    },
    {
      "_id": "633cc32856e324f2dac4f57b",
      "name": "Above & Beyond",
      "composer": {
        "name": "Jugend Nurit",
        "_id": "633cc39a56e324f2dac4f6ec"
      },
      "duration": "13",
      "year": "2003",
      "instruments": "Flute, Oboe, Clarinet, Bassoon, Trumpet, Trombone, Tuba, Piano, Violin, Viola, Cello, Double Bass",
      "recordingLink": "There is no information at this moment.",
      "publisher": "There is no information at this moment.",
      "scoreLink": "https://www.nuritjugend.com/A/Contemporary_Compositions.html",
      "image": "../../img/placeholder.png"
      
    },
    {
      "_id": "633cc32856e324f2dac4f4c2",
      "name": "Afro-Cuban Concerto",
      "composer": {
        "name": "Coleman Valerie",
        "_id": "633cc39a56e324f2dac4f6bf"
      },
      "duration": "15",
      "year": "2001",
      "instruments": "Wind quintet (flute, oboe, clarinet, bassoon, horn)",
      "recordingLink": "There is no information at this moment.",
      "publisher": "V Coleman Music Publishing, LLC",
      "scoreLink": "https://www.vcolemanmusic.com/store/p74/Afro-Cuban_Concerto_%28Print_Order_Only%29.html",
      "image": "../../img/placeholder.png",
      
      tag: "Most popular",
      tagColor: "#ffe799",
    },
    {
      "_id": "633cc32856e324f2dac4f608",
      "name": "Apprehensions",
      "composer": {
        "name": "Ran Shulamit",
        "_id": "633cc39a56e324f2dac4f710"
      },
      "duration": "20.5",
      "year": "1979",
      "instruments": "Voice, Clarinet in A and Piano",
      "recordingLink": "There is no information at this moment.",
      "publisher": "There is no information at this moment.",
      "scoreLink": "https://www.presser.com/511-01816-apprehensions.html",
      "image": "../../img/placeholder.png"
     
    },

    
  ];

  const courses2 = [
    {
      "_id": "633cc32856e324f2dac4f53b",
      "name": "Times for Flying",
      "composer": {
        "name": "Harrison Sadie",
        "_id": "633cc39a56e324f2dac4f6dd"
      },
      "duration": "9",
      "year": "2000",
      "instruments": "2 Clarinets",
      "recordingLink": "Recording Link unknown.",
      "publisher": "UYMP",
      "scoreLink": "ScoreLink unknown.",
      "image": "../../img/placeholder.png",
     
      tag: "Highest rating",
      tagColor: "#ffe799",
    },
    {
      "_id": "633cc32856e324f2dac4f556",
      "name": "Bisbiglio",
      "composer": {
        "name": "Hong Sungji",
        "_id": "633cc39a56e324f2dac4f6e3"
      },
      "duration": "7",
      "year": "2011",
      "instruments": "Flute, Clarinet, Piano",
      "recordingLink": "https://youtu.be/_OB1-HCu7LU",
      "publisher": "Tetractys",
      "scoreLink": "https://www.tetractys.co.uk/photo_16916534.html",
      "image": "../../img/placeholder.png"
     
    },
    {
      "_id": "633cc32856e324f2dac4f62c",
      "name": "Caerulean",
      "composer": {
        "name": "Saunders Rebecca",
        "_id": "633cc39a56e324f2dac4f718"
      },
      "duration": "21",
      "year": "2011",
      "instruments": "Bass Clarinet and Electronics",
      "recordingLink": "Naxos",
      "publisher": "Edition Peters",
      "scoreLink": "There is no information at this moment.",
      "image": "../../img/placeholder.png"
      
    },
    {
      "_id": "633cc32856e324f2dac4f461",
      "name": "Capriccio",
      "composer": {
        "name": "Arrieu Claude (Louise Marie Simon)",
        "_id": "633cc39a56e324f2dac4f69f"
      },
      "duration": "6",
      "year": "1970",
      "instruments": "Clarinet and Piano",
      "recordingLink": "https://open.spotify.com/track/6fmNEgFCMYcMBJMNY1akFS?si=ad84ecdce8de4cce",
      "publisher": "Amphion",
      "scoreLink": "https://www.boosey.com/shop/prod/Arrieu-Claude-Capriccio-clarinet-piano/2104455",
      "image": "../../img/placeholder.png"
    },
    {
      "_id": "633cc32856e324f2dac4f4ea",
      "name": "Six Duets",
      "composer": {
        "name": "Decruck Fernande",
        "_id": "633cc39a56e324f2dac4f6c4"
      },
      "duration": "Duration unknown.",
      "year": "1934",
      "instruments": "2 Clarinets",
      "recordingLink": "Recording Link unknown.",
      "publisher": "Publisher unknown.",
      "scoreLink": "ScoreLink unknown.",
      "image": "../../img/placeholder.png"
     
    },

    
  ];
  const courses3 = [
    {
      "_id": "633cc32856e324f2dac4f4e8",
      "name": "Arioso",
      "composer": {
        "name": "Decruck Fernande",
        "_id": "633cc39a56e324f2dac4f6c4"
      },
      "duration": "There is no information at this moment.",
      "year": "1932",
      "instruments": "Bass Clarinet and Piano",
      "recordingLink": "There is no information at this moment.",
      "publisher": "There is no information at this moment.",
      "scoreLink": "There is no information at this moment.",
      "image": "../../img/placeholder.png",

      tag: "Highest rating",
      tagColor: "#ffe799",
    },
    {
      "_id": "633cc32856e324f2dac4f531",
      "name": "Snow and Snow",
      "composer": {
        "name": "Grime Helen",
        "_id": "633cc39a56e324f2dac4f6d8"
      },
      "duration": "9",
      "year": "2012",
      "instruments": "Clarinet, Viola, Piano",
      "recordingLink": "Recording Link unknown.",
      "publisher": "Publisher unknown.",
      "scoreLink": "http://www.musicsalesclassical.com/composer/work/3953/47405",
      "image": "../../img/placeholder.png"

    },
    {
      "_id": "633cc32856e324f2dac4f649",
      "name": "Sonata Champêtre ",
      "composer": {
        "name": "Tailleferre Germaine",
        "_id": "633cc39a56e324f2dac4f723"
      },
      "duration": "Duration unknown.",
      "year": "1972",
      "instruments": "Clarinet, Bassoon, Piano",
      "recordingLink": "Recording Link unknown.",
      "publisher": "Publisher unknown.",
      "scoreLink": "ScoreLink unknown.",
      "image": "../../img/placeholder.png"

    },
    {
      "_id": "633cc32856e324f2dac4f4d2",
      "name": "Song of Pure Nothingness",
      "composer": {
        "name": "Davies Tansy",
        "_id": "633cc39a56e324f2dac4f6c3"
      },
      "duration": "13",
      "year": "2015",
      "instruments": "Mezzo-Soprano or Countertenor and Piano",
      "recordingLink": "Recording Link unknown.",
      "publisher": "Faber",
      "scoreLink": "ScoreLink unknown.",
      "image": "../../img/placeholder.png"
    },
    {
      "_id": "633cc32856e324f2dac4f606",
      "name": "Three Scenes",
      "composer": {
        "name": "Ran Shulamit",
        "_id": "633cc39a56e324f2dac4f710"
      },
      "duration": "Duration unknown.",
      "year": "2000",
      "instruments": "Solo Clarinet",
      "recordingLink": "Recording Link unknown.",
      "publisher": "Publisher unknown.",
      "scoreLink": "ScoreLink unknown.",
      "image": "../../img/placeholder.png"

    },


  ];

const mystyle = {
  color: "#3c3b37",
  fontSize: "1.6rem",
  marginTop: "3rem",
  marginLeft: "16.4%"
};
  return (
    <>
    <h4 style={mystyle}>Top Repertoire</h4>
      <Swiper
       
        slidesPerView={1}
        spaceBetween={33}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><HomeListComposer courses={courses}/></SwiperSlide>
        <SwiperSlide><HomeListComposer courses={courses2}/></SwiperSlide>
        <SwiperSlide><HomeListComposer courses={courses3}/></SwiperSlide>
        
      </Swiper>
    </>
    // <HomeListComposer
    //   heading='Top Repertoires '
    //   link='" Recommendation of today"'
      
    //   courses={courses}
    // />
  );
};



export default HomeRepertoire;
