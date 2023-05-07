import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import FluteImg from '../../../img/flute.png';
import ClarinetImg from '../../../img/clarinet.png';
import PianoImg from '../../../img/piano.png';
import CelloImg from '../../../img/cello.png';
import ViolinImg from '../../../img/violin.png';
import TrumpetImg from '../../../img/trumpet.png';
import HornImg from '../../../img/horn.png';
import BassoonImg from '../../../img/bassoon.png';
import OboeImg from '../../../img/oboe.png';
import ViolaImg from '../../../img/viola.png';

import "./Instrument.css";
import { useNavigate } from "react-router-dom";
import InstrumentChild from "../../pages/Instrument/InstrumentChild";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../../Footer";

const Instrument = () => {

      const [index, setIndex] = useState(0);
    const styleSlider = {
        padding:"20px",
        height:"80%",
        width:"auto"
    }
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
        let navigate = useNavigate(); 
        // const FluteRoute = () =>{ 
        // let path = '/instrument/flute'; 
        // navigate(path);
        // }
        const [URL,setURL] = useState([]);
        // const [info,setInfo] = useState([]);

        const onClickBrowseHandler1= (e) =>{
            // setInfo(e.target.value);
            console.log("clicked",e.target.value)
            // const URL = `${e.target.value}`;
            const URL = "Flute";
            setURL(URL);
            console.log(URL);
            // navigate(`/instrument/${URL}`,{state:{URL}});
            navigate('/instrument/Flute',{state:"Flute"});
        }
        const onClickBrowseHandler2= (e) =>{
            // setInfo(e.target.value);
            console.log("clicked",e.target.value)
            // const URL = `${e.target.value}`;
            const URL = "Clarinet";
            setURL(URL);
            console.log(URL);
            // navigate(`/instrument/${URL}`,{state:{URL}});
            navigate('/instrument/Clarinet',{state:"Clarinet"});
        }
        const onClickBrowseHandler3= (e) =>{
            // setInfo(e.target.value);
            console.log("clicked",e.target.value)
            // const URL = `${e.target.value}`;
            const URL = "Piano";
            setURL(URL);
            console.log(URL);
            // navigate(`/instrument/${URL}`,{state:{URL}});
            navigate('/instrument/Piano',{state:"Piano"});
        }
        const onClickBrowseHandler4= (e) =>{
            // setInfo(e.target.value);
            console.log("clicked",e.target.value)
            // const URL = `${e.target.value}`;
            const URL = "Cello";
            setURL(URL);
            console.log(URL);
            // navigate(`/instrument/${URL}`,{state:{URL}});
            navigate('/instrument/Cello',{state:"Cello"});
        }
        const onClickBrowseHandler5= (e) =>{
            // setInfo(e.target.value);
            console.log("clicked",e.target.value)
            // const URL = `${e.target.value}`;
            const URL = "Violin";
            setURL(URL);
            console.log(URL);
            // navigate(`/instrument/${URL}`,{state:{URL}});
            navigate('/instrument/Violin',{state:"Violin"});
        }
        const onClickBrowseHandler6= (e) =>{
            // setInfo(e.target.value);
            console.log("clicked",e.target.value)
            // const URL = `${e.target.value}`;
            const URL = "Trumpet";
            setURL(URL);
            console.log(URL);
            // navigate(`/instrument/${URL}`,{state:{URL}});
            navigate('/instrument/Trumpet',{state:"Trumpet"});
        }
        const onClickBrowseHandler7= (e) =>{
            // setInfo(e.target.value);
            console.log("clicked",e.target.value)
            // const URL = `${e.target.value}`;
            const URL = "Horn";
            setURL(URL);
            console.log(URL);
            // navigate(`/instrument/${URL}`,{state:{URL}});
            navigate('/instrument/Horn',{state:"Horn"});
        }
        const onClickBrowseHandler8= (e) =>{
            // setInfo(e.target.value);
            console.log("clicked",e.target.value)
            // const URL = `${e.target.value}`;
            const URL = "Bassoon";
            setURL(URL);
            console.log(URL);
            // navigate(`/instrument/${URL}`,{state:{URL}});
            navigate('/instrument/Bassoon',{state:"Bassoon"});
        }
        const onClickBrowseHandler9= (e) =>{
            // setInfo(e.target.value);
            console.log("clicked",e.target.value)
            // const URL = `${e.target.value}`;
            const URL = "Oboe";
            setURL(URL);
            console.log(URL);
            // navigate(`/instrument/${URL}`,{state:{URL}});
            navigate('/instrument/Oboe',{state:"Oboe"});
        }
        const onClickBrowseHandler10= (e) =>{
            // setInfo(e.target.value);
            console.log("clicked",e.target.value)
            // const URL = `${e.target.value}`;
            const URL = "Viola";
            setURL(URL);
            console.log(URL);
            // navigate(`/instrument/${URL}`,{state:{URL}});
            navigate('/instrument/Viola',{state:"Viola"});
        }
        return (
        // <Container style={{ position: "absolute", marginTop: "120px", fontSize: "20px" }}>
        //   <Row class="d-flex row">
        //     <div class="col col-3 d-flex justify-content-center">
        //         {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
        //             <Card>
        //             <Card.Img variant="top" src={FluteImg} alt="https://www.classical-music.com/features/works/the-best-flute-solos-in-orchestral-works/"/>
        //             <Card.Body class="card-body">
        //                 <Card.Title>Flute</Card.Title>
        //                 <Card.Text>
        //                 The flute is a family of classical music instrument in the woodwind group. Like all woodwinds, flutes are aerophones, meaning they make sound by vibrating a column of air. However, unlike woodwind instruments with reeds, a flute is a reedless wind instrument that produces its sound from the flow of air across an opening. According to the instrument classification of Hornbostel–Sachs, flutes are categorized as edge-blown aerophones. A musician who plays the flute is called a flautist or flutist.
        //                 </Card.Text>
        //                 {/* <Link to='/recommendation/ailis'> */}
        //                 <Button variant="primary" class="mt-auto btn" value="flute" onClick={onClickBrowseHandler}>View more details.</Button>
        //                 {/* </Link> */}
        //             </Card.Body>
        //             </Card>
        //         {/* </div> */}
        //     </div>
        //     <div class="col col-3 d-flex justify-content-center">
        //     {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
        //             <Card>
        //             <Card.Img variant="top" src={ClarinetImg} alt="https://www.thoughtco.com/history-of-the-clarinet-1991464" />
        //             <Card.Body class="card-body">
        //                 <Card.Title>CLarinet</Card.Title>
        //                 <Card.Text>
        //                 Clarinet information.
        //                 </Card.Text>
        //                 <Button variant="primary" class="mt-auto btn" value="clarinet" onClick={onClickBrowseHandler}>View related pieces.</Button>
        //             </Card.Body>
        //             </Card>
        //         {/* </div> */}
        //     </div>
        //     <div class="col col-3 d-flex justify-content-center">
        //     {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
        //             <Card>
        //             <Card.Img variant="top"  src="holder.js/100px180" />
        //             <Card.Body class="card-body">
        //                 <Card.Title>Piano</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary" class="mt-auto btn">View more details.</Button>
        //             </Card.Body>
        //             </Card>
        //         {/* </div> */}
        //     </div>
        //     <div class="col col-3 d-flex justify-content-center">
        //     {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
        //             <Card>
        //             <Card.Img variant="top"  src="holder.js/100px180" />
        //             <Card.Body class="card-body">
        //                 <Card.Title>Viola</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary" class="mt-auto btn">View more details.</Button>
        //             </Card.Body>
        //             </Card>
        //         {/* </div> */}
        //     </div>
        //   </Row><br></br>
        //   <Row>
        //     <div class="col col-3 d-flex justify-content-center">            
        //      {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
        //             <Card>
        //             <Card.Img variant="top" src="holder.js/100px180" />
        //             <Card.Body  class="card-body">
        //                 <Card.Title>Oboe</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary"  class="mt-auto btn">View more details.</Button>
        //             </Card.Body>
        //             </Card>
        //         {/* </div> */}
        //     </div>
        //     <div class="col col-3 d-flex justify-content-center">            
        //         {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
        //             <Card>
        //             <Card.Img variant="top" src="holder.js/100px180" />
        //             <Card.Body  class="card-body">
        //                 <Card.Title>Bassoon</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary"  class="mt-auto btn">View more details.</Button>
        //             </Card.Body>
        //             </Card>
        //         {/* </div> */}
        //     </div>
        //     <div class="col col-3 d-flex justify-content-center">            
        //     {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
        //             <Card  class="card">
        //             <Card.Img variant="top" src="holder.js/100px180" />
        //             <Card.Body class="card-body">
        //                 <Card.Title>Horn</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary" class="mt-auto btn">View more details.</Button>
        //             </Card.Body>
        //             </Card>
        //         {/* </div> */}
        //     </div>
        //   </Row>
        //   <Row>
        //     <div class="col col-3 d-flex justify-content-center">            
        //      {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
        //             <Card>
        //             <Card.Img variant="top" src="holder.js/100px180" />
        //             <Card.Body  class="card-body">
        //                 <Card.Title>Trumpet</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary"  class="mt-auto btn">View more details.</Button>
        //             </Card.Body>
        //             </Card>
        //         {/* </div> */}
        //     </div>
        //     <div class="col col-3 d-flex justify-content-center">            
        //         {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
        //             <Card>
        //             <Card.Img variant="top" src="holder.js/100px180" />
        //             <Card.Body  class="card-body">
        //                 <Card.Title>Violin</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary"  class="mt-auto btn">View more details.</Button>
        //             </Card.Body>
        //             </Card>
        //         {/* </div> */}
        //     </div>
        //     <div class="col col-3 d-flex justify-content-center">            
        //     {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
        //             <Card  class="card">
        //             <Card.Img variant="top" src="holder.js/100px180" />
        //             <Card.Body class="card-body">
        //                 <Card.Title>Cello</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary" class="mt-auto btn">View more details.</Button>
        //             </Card.Body>
        //             </Card>
        //         {/* </div> */}
        //     </div>
        //   </Row>
        // </Container>



        <div style={styleSlider}>
        <Carousel activeIndex={index} onSelect={handleSelect}>

        {/* 11111111111111111 */}
        <Carousel.Item value="Flute" >
        <div value="Flute" onClick={onClickBrowseHandler1}>
          <img
            className="d-block w-100"
            src={FluteImg}
            alt="First slide"
          />
          </div>
          <Carousel.Caption>
            <h3>Flute</h3>
            {/* <button onClick={onClickBrowseHandler}>HHHHHHHHH</button> */}
            <p>The flute is a family of classical music instrument in the woodwind group. Like all woodwinds, flutes are aerophones, meaning they make sound by vibrating a column of air. However, unlike woodwind instruments with reeds, a flute is a reedless wind instrument that produces its sound from the flow of air across an opening. According to the instrument classification of Hornbostel–Sachs, flutes are categorized as edge-blown aerophones.[1] A musician who plays the flute is called a flautist or flutist.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* 222222222222222222 */}
        <Carousel.Item>
        <div value="Flute" onClick={onClickBrowseHandler2}>
          <img
            className="d-block w-100"
            src={ClarinetImg}
            alt="Second slide"
          />
          </div>
          <Carousel.Caption>
            <h3>Clarinet</h3>
            <p>The clarinet is a type of single-reed woodwind instrument. Like many wind instruments, clarinets are made in several different sizes, each having its own range of pitches. All have a nearly-cylindrical bore and a flared bell, and utilize a mouthpiece with a single reed. A person who plays a clarinet is called a clarinetist (sometimes spelled clarinettist).</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* 3333333333333 */}
        <Carousel.Item>
        <div value="Piano" onClick={onClickBrowseHandler3}>
          <img
            className="d-block w-100"
            src={PianoImg}
            alt="Third slide"
          />
        </div>
          <Carousel.Caption>
            <h3>Piano</h3>
            <p>
            The piano is a stringed keyboard instrument in which the strings are struck by wooden hammers that are coated with a softer material (modern hammers are covered with dense wool felt; some early pianos used leather). It is played using a keyboard, which is a row of keys (small levers) that the performer presses down or strikes with the fingers and thumbs of both hands to cause the hammers to strike the strings. It was invented in Italy by Bartolomeo Cristofori around the year 1700.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* 444444444 */}
        <Carousel.Item>
        <div value="Cello" onClick={onClickBrowseHandler4}>
          <img
            className="d-block w-100"
            src={CelloImg}
            alt="First slide"
          />
        </div>
          <Carousel.Caption>
            <h3>Cello</h3>
            <p>The cello (/ˈtʃɛloʊ/ CHEL-oh; plural celli or cellos) or violoncello (/ˌvaɪələnˈtʃɛloʊ/ VY-ə-lən-CHEL-oh; Italian pronunciation: [vjolonˈtʃɛllo])[1] is a bowed (sometimes plucked and occasionally hit) string instrument of the violin family. Its four strings are usually tuned in perfect fifths: from low to high, C2, G2, D3 and A3. The viola's four strings are each an octave higher. Music for the cello is generally written in the bass clef, with tenor clef, or alto clef, and treble clef used for higher-range passages.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* 5555555555 */}
        <Carousel.Item>
        <div value="Violin" onClick={onClickBrowseHandler5}>
          <img
            className="d-block w-100"
            src={ViolinImg}
            alt="First slide"
          />
        </div>
          <Carousel.Caption>
            <h3>Violin</h3>
            <p>The violin, sometimes known as a fiddle, is a wooden chordophone (string instrument) in the violin family. Most violins have a hollow wooden body. It is the smallest and thus highest-pitched instrument (soprano) in the family in regular use.[a] The violin typically has four strings (some can have five), usually tuned in perfect fifths with notes G3, D4, A4, E5, and is most commonly played by drawing a bow across its strings. It can also be played by plucking the strings with the fingers (pizzicato) and, in specialized cases, by striking the strings with the wooden side of the bow (col legno).</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* 66666666666666 */}
        <Carousel.Item>
        <div value="Trumpet" onClick={onClickBrowseHandler6}>
          <img
            className="d-block w-100"
            src={TrumpetImg}
            alt="First slide"
          />
        </div>
          <Carousel.Caption>
            <h3>Trumpet</h3>
            <p>The trumpet is a brass instrument commonly used in classical and jazz ensembles. The trumpet group ranges from the piccolo trumpet—with the highest register in the brass family—to the bass trumpet, pitched one octave below the standard B♭ or C trumpet. Trumpet-like instruments have historically been used as signaling devices in battle or hunting, with examples dating back to at least 1500 BC. They began to be used as musical instruments only in the late 14th or early 15th century.[1] </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* 777777777777 */}
        <Carousel.Item>
        <div value="Horn" onClick={onClickBrowseHandler7}>
          <img
            className="d-block w-100"
            src={HornImg}
            alt="First slide"
          />
        </div>
          <Carousel.Caption>
            <h3>Horn</h3>
            <p>An acoustic horn or waveguide is a tapered sound guide designed to provide an acoustic impedance match between a sound source and free air. This has the effect of maximizing the efficiency with which sound waves from the particular source are transferred to the air. Conversely, a horn can be used at the receiving end to optimize the transfer of sound from the air to a receiver.

Acoustic horns are found in nature in the form of the burrows constructed by male mole crickets to amplify their song. The earliest appearance of the horn in connection to sound in The Times was published in 1786:

Red-cross Knight, approach the Gate;
Sound the horn, not fear thy fate.[1]</p>
          </Carousel.Caption>
        </Carousel.Item>
        

        {/* 88888888888 */}
        <Carousel.Item>
        <div value="Bassoon" onClick={onClickBrowseHandler8}>
          <img
            className="d-block w-100"
            src={BassoonImg}
            alt="First slide"
          />
        </div>
          <Carousel.Caption>
            <h3>Bassoon</h3>
            <p>The bassoon is a woodwind instrument in the double reed family, which plays in the tenor and bass ranges.[1] It is composed of six pieces, and is usually made of wood. It is known for its distinctive tone color, wide range, versatility, and virtuosity.[1] It is a non-transposing instrument and typically its music is written in the bass and tenor clefs, and sometimes in the treble.[1] There are two forms of modern bassoon: the Buffet (or French) and Heckel (or German) systems.[2] It is typically played while sitting using a seat strap, but can be played while standing if the player has a harness to hold the instrument. Sound is produced by rolling both lips over the reed and blowing direct air pressure to cause the reed to vibrate. Its fingering system can be quite complex when compared to those of other instruments. </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* 99999999999 */}
        <Carousel.Item>
        <div value="Oboe" onClick={onClickBrowseHandler9}>
          <img
            className="d-block w-100"
            src={OboeImg}
            alt="First slide"
          />
        </div>
          <Carousel.Caption>
            <h3>Oboe</h3>
            <p>The oboe (/ˈoʊboʊ/ OH-boh) is a type of double reed woodwind instrument. Oboes are usually made of wood, but may also be made of synthetic materials, such as plastic, resin, or hybrid composites. The most common oboe plays in the treble or soprano range.

A soprano oboe measures roughly 65 cm (25+1⁄2 in) long, with metal keys, a conical bore and a flared bell. Sound is produced by blowing into the reed at a sufficient air pressure, causing it to vibrate with the air column.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        {/* 10000000000000000000 */}
        <Carousel.Item>
        <div value="Viola" onClick={onClickBrowseHandler10}>
          <img
            className="d-block w-100"
            src={ViolaImg}
            alt="First slide"
          />
        </div>
          <Carousel.Caption>
            <h3>Viola</h3>
            <p>The viola (/viˈoʊlə/ vee-OH-lə,[1][2] also UK: /vaɪˈoʊlə/ vy-OH-lə,[3][4][a] Italian: [ˈvjɔːla, viˈɔːla]) is a string instrument that is bowed, plucked, or played with varying techniques. Slightly larger than a violin, it has a lower and deeper sound. Since the 18th century, it has been the middle or alto voice of the violin family, between the violin (which is tuned a perfect fifth above) and the cello (which is tuned an octave below).[5] The strings from low to high are typically tuned to C3, G3, D4, and A4.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br/><br></br><br></br><br></br><br></br><br></br>
        <footer>

        <Footer />
      </footer>
      </div>







        // <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        // <ol class="carousel-indicators">
        //     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        // </ol>
        // <div class="carousel-inner">
        //     <div class="carousel-item active">
        //     <img class="d-block w-100" src={FluteImg} alt="First slide"/>
        //     <div class="carousel-caption d-none d-md-block">
        //     <h5>...</h5>
        //     <p>...</p>
        //     </div>
        //     </div>
        //     <div class="carousel-item">
        //     <img class="d-block w-100" src={FluteImg} alt="Second slide"/>
        //     <div class="carousel-caption d-none d-md-block">
        //     <h5>...</h5>
        //     <p>...</p>
        //     </div>
        //     </div>
        //     <div class="carousel-item">
        //     <img class="d-block w-100" src={FluteImg} alt="Third slide"/>
        //     <div class="carousel-caption d-none d-md-block">
        //     <h5>...</h5>
        //     <p>...</p>
        //     </div>
        //     </div>
        // </div>
        // <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //     <span class="sr-only">Previous</span>
        // </a>
        // <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //     <span class="sr-only">Next</span>
        // </a>
        // </div>
        );
    };
//source
//https://www.classical-music.com/features/works/the-best-flute-solos-in-orchestral-works/
//https://dolceviolins.net/blog/cello-range/
//https://www.curtis.edu/studio/piano/
//https://www.violinist.com/blog/laurie/20227/29298/
//https://www.musicianwave.com/types-of-trumpets/
//https://www.realizzazioniecatalogorostagno.it/robos.asp?shop=horn+playing&cid=8
//https://www.aso.com.au/2020/11/09/musos-of-the-aso-joshua-oates-principal-oboe/
//https://sfcm.edu/bassoon
//https://www.youtube.com/watch?v=XierDLeUiYg

export default Instrument;