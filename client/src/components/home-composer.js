import HomeListComposer from "./home-list-composer";

import djangoEcomImg from "../img/django_ecommerce.jpg";
import djangoFullImg from "../img/django_fullstack.jpg";
import pythonImg from "../img/python_django.jpg";
import buildPyImg from "../img/build_python.jpg";
import reactDjImg from "../img/react_django.jpg";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
const mystyle = {
  color: "#3c3b37",
  fontSize: "1.6rem",
  marginTop: "3rem",
  marginLeft: "16.4%"
};

const HomeComposer = () => {
  const courses = [
    {

      "_id": "633cc39a56e324f2dac4f709",
      "name": "Musgrave Thea",
      "nationality": "British (Scottish)",
      "website": "https://www.theamusgrave.com/biography",
      "biography": "Rich and powerful musical language and a strong sense of drama have made Scottish-American composer Thea Musgrave one of the most respected and exciting contemporary composers in the Western world. Her works are performed in major concert halls, festivals, and radio stations on both sides of the Atlantic.  Known for the clarity of her invention, the skill of her orchestrations, and the power of her musical communication, Musgrave has consistently explored new means of projecting essentially dramatic situations in her music, frequently altering and extending the conventional boundaries of instrumental performance by physicalizing their musical and dramatic impact: both without programmatic content (such as the Clarinet Concerto, the Horn Concerto, the Viola Concerto, and Space Play), and others with specific programmatic ideas (such as the paintings in The Seasons and Turbulent Landscapes, the poems in Ring Out Wild Bells, Journey through a Japanese Landscape, and Autumn Sonata, and the famous Greek legends in Orfeo, Narcissus, Helios, and Voices from the Ancient World); -- all extensions of concerto principles. In some of these, to enhance the dramatic effect, the sonic possibilities of spatial acoustics have been incorporated: in the Clarinet Concerto the soloist moves around the different sections of the orchestra, and in the Horn Concerto the orchestral horns are stationed around the concert hall. Thus the players are not only the conversants in an abstract musical dialogue, but also very much the living (and frequently peripatetic) embodiment of its dramatis personae. Her ten large-scale and several chamber operas of the past 40 years beginning with The Voice of Ariadne (1972) and followed by Mary, Queen of Scots (1977), A Christmas Carol (1979), Harriet, The Woman Called Moses (1984), Simón Bolívar (1992), Pontalba (2003) are in every sense the true successors to these instrumental concertos.Two major retrospectives in recent years have shown the immense diversity of her music: the BBC’s Total Immersion weekend in 2014 and the   Stockholm International Composer Festival 2018, in which fifteen of her orchestral and chamber works in four concerts — the largest profile of her music to date. Musgrave has been featured at many other major festivals including as Edinburgh, Warsaw Autumn, Florence Maggio Musicale, Venice Biennale, Aldeburgh, Cheltenham and Zagreb. Musgrave has been the recipient of many notable awards including two Guggenheim Fellowships, the Ivors Classical Music Award 2018, and The Queen's Medal for Music. She was awarded a CBE on the Queen's New Year's Honour List in 2002.",
      "image": "../../img/thea.jpg",
      "DOB": "1928"
    },
    {
      "_id": "633cc39a56e324f2dac4f70b",
      "name": "Ni Riain Ailis",
      "nationality": "Irish",
      "website": "https://www.ailis.info/",
      "biography": "Ailís Ní Ríain is a contemporary classical composer and published writer for stage who aims to produce work that challenges, provokes and engages. A regular collaborator with artists in other art-forms, her artistic interests are diverse and combined with an unwavering desire to push and develop her artistic practice through each new project or commission.  Ailís composes concert music, site­-specific music installations, opera, music­-theatre and often collaborates with artists working in other forms such as visual art, text, photography and illustration. There have been performances of her work at the Queen Elizabeth Hall, London, The National Concert Hall of Ireland and Carnegie Hall, New York, throughout Europe and on BBC Radio and RTE Radio. Alice Mary Smith (married name Alice Mary Meadows White) was a prolific and talented Victorian composer, remarkable for being the first known woman in Britain to have composed a symphony. During her lifetime, she gained a favourable reputation. Alice Mary Smith was born in 1839, the third child of a relatively wealthy family. Her father was a lace merchant. Well educated, she started to learn Latin at age six, Greek at eight, and Hebrew at 10. Her wide knowledge of poetry was later evidenced by her choice of texts for her songs and the subjects of her concert overtures. She showed talent in music from a young age and was fortunate that her family could afford to provide her with private lessons from William Sterndale Bennett and George Alexander Macfarren. Smith joined the Musical Society of London in 1861, an organisation of contemporary composers who as members gained the opportunity of hearing their works in performance. In 1863, at the age of just 24, she wrote her first symphony, Symphony in C Minor. It was performed by the Musical Society of London later that year. A review of the concert appeared in the Illustrated London News: “On the same evening, at the Hanover-square Rooms, the Musical society of London had a trial-performance of new orchestral compositions by members of the society. Several symphonies and overtures were performed by a full and excellent orchestra, which did them every justice. Amongst the most remarkable was a symphony in C minor by Miss Alice Mary Smith and a symphony in A minor by Mr. John Francis Barnett, both admirable compositions, which did honour to the talents of their authors. Miss Smith's symphony especially, coming from the pen of a young lady, was striking proof of the sound studies and high attainments of the female votaries of the art in this country. We trust that these symphonies will be brought before the public in the course of the ensuing season.” In November 1867, the year of her marriage to a lawyer, Frederick Meadows White, Alice Mary Smith was elected Female Professional Associate of the Royal Philharmonic Society. In 1884 she was elected an honorary member of the Royal Academy of Music. It was a time in which it was widely believed that women were incapable of composing large-scale works. As with other female composers of the time, Smith was sometimes forced to adopt a male pseudonym - Emil Künstler - to submit compositions for publication, as a female name often caused immediate rejection. However, Smith’s husband actively defended and supported his wife’s musical activities, and even used his influence and money to promote her performances. It was symptomatic of the times that he assured her critics that her composing in no way detracted from her “good management of domestic affairs”. Smith's oeuvre includes one of the largest collections of sacred choral music by a woman composer, and comprises six anthems, three canticles (and the beginning to a fourth), as well as a short Sacred Cantata Exile, based on episodes from Jean Racine's Esther. Her anthems Whoso hath this world's goods and By the waters of Babylon were performed in a liturgical context at St Andrew's, Wells Street by Sir Joseph Barnby in February 1864, making them the first recorded instance of music by a woman composer to be used for the liturgies of the Church of England. Smith’s important Clarinet Sonata in A Major was written in 1870 and was performed by the virtuoso clarinettist Henry Lazarus, with Smith at the piano in December of the same year. It was possibly the first British sonata for the instrument, to be followed ten years later by that of Charles Swinnerton Heap (1880) and Ebenezer Prout (1882). Lazarus was clearly impressed by the work, as he persuaded Smith to adapt the sonata as a concerto. All that survives is the slow movement, a substantial piece that can stand on its own and which shows off the characteristics of the instrument, exploiting its full range and timbres. Lazarus gave three performances of the orchestrated version in 1872–73 at festivals in Norwich, Brighton and London. Her other compositions include another symphony, written in A minor, four piano quartets, two large choral works with soloists, six concert overtures, three string quartets, four large-scale cantatas, as well as an extensive collection of 40 songs. Novello & Co published her four secular cantatas, which were some of the first brought out by a female. On December 4, 1884, Smith died of typhoid in London, aged just 45. The Musical Times ran an obituary that praised her accomplishments, saying: “She has gradually achieved a fame which places her name at the head of female creative artists; no other, as far as we are aware, having written for the orchestra, both alone, and in combination with voices.” The New York Times and The Boston Evening Traveller also carried obituaries. Another, in The Athenaeum, of December 13, 1884, states: \"Her music is marked by elegance and grace... power and energy. Her forms were always clear and her ideas free from eccentricity; her sympathies were evidently with the classic rather than with the romantic school.\"",
      "image": "../../img/Ailis.jpg",
      "DOB": "1974"

    },
    {
      "_id": "633cc39a56e324f2dac4f6ae",
      "name": "Bonis Mel",
      "nationality": "French",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1858-1937"
    },
    {
      "_id": "633cc39a56e324f2dac4f6b1",
      "name": "Bray Charlotte",
      "nationality": "British (English)",
      "website": "http://charlottebray.co.uk/",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1982"
    },
    {
      "_id": "633cc39a56e324f2dac4f6b4",
      "name": "Brouwer Margaret",
      "nationality": "American",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1940"
    },
  ];

  const courses2 = [
    {
      "_id": "633cc39a56e324f2dac4f6b6",
      "name": "Burrell Diana",
      "nationality": "British (English)",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1948"
    },
    {
      "_id": "633cc39a56e324f2dac4f6b8",
      "name": "Carwithen Doreen",
      "nationality": "British (English)",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1922-2003"
    },
    {
      "_id": "633cc39a56e324f2dac4f6c2",
      "name": "Czernowin Chaya",
      "nationality": "Israeli American",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1957",
      tag: "Most polular",
      tagColor: "#ffe799",
    },
    {
      "_id": "633cc39a56e324f2dac4f6c5",
      "name": "Desportes Yvonnes",
      "nationality": "French",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1907-1993"
    },
    {
      "_id": "633cc39a56e324f2dac4f6cb",
      "name": "Epstein Marti",
      "nationality": "American",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1959"
    },
  ];
  const courses3 = [
    {
      "_id": "633cc39a56e324f2dac4f6f8",
      "name": "Lee Joanna",
      "nationality": "British (English)",
      "website": "http://www.joannalee.co.uk/",
      "biography": "Biography unknown.",
      "image": "../../img/placeholder.png",
      "DOB": "1982"
    },
    {
      "_id": "633cc39a56e324f2dac4f6ff",
      "name": "Lu Wang",
      "nationality": "Chinese American",
      "website": "https://wanglucomposer.com/",
      "biography": "Biography unknown.",
      "image": "../../img/placeholder.png",
      "DOB": ""
    },
    {
      "_id": "633cc39a56e324f2dac4f700",
      "name": "Lutyens Elisabeth",
      "nationality": "British (English)",
      "website": "https://www.schott-music.com/en/person/elisabeth-lutyens",
      "biography": "Daughter of Edwardian architect Sir Edwin Lutyens, Elizabeth Lutyens is remembered as a pioneer amongst woman composers, and an early advocate of the twelve-note system in Britain at a time when it was derided and misunderstood. Though most comfortable in the smaller forms, she created a large output of works for the concert hall in addition to her commercial writing for the cinema.  Formal clarity and precision were valued above romantic expression, but her finest music balances classical poise and direction with a turbulent current of genuine emotion.",
      "image": "../../img/elisabeth.jpg",
      "DOB": "1906-1983",
      tag: "Most polular",
      tagColor: "#ffe799",
    },
    {
      "_id": "633cc39a56e324f2dac4f6a8",
      "name": "Beglarian Eve",
      "nationality": "American Armenian",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1958"
    },
    {
      "_id": "633cc39a56e324f2dac4f6ab",
      "name": "Blass Noa",
      "nationality": "Israeli",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1937-2008"
    },
  ];
  return (
      <>

        <h4 style={mystyle}>Popular Composers</h4>
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
  );
};

export default HomeComposer;
