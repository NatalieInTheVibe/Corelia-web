// import React, { useState, useEffect, useRef } from "react";
// import {Link, Route, useParams} from "react-router-dom";
// import Card from "../../Card";
// import "./Profile.css";
//
// const AlbumItemsPage = () => {
//     const [itemFound, setItemFound] = useState();
//     const selectedCardIndex = useRef();
//
//     const [items, setItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isShowing, setIsShowing] = useState(false);
//
//     const { albumId } = useParams();
//
//     useEffect(() => {
//         setIsLoading(true);
//         const fetchData = async () => {
//             const result = await fetch(
//                 `https://jsonplaceholder.typicode.com/photos`
//             );
//             const resultJson = await result.json();
//             setItems(resultJson);
//             setIsLoading(false);
//         };
//         fetchData();
//     }, [itemFound, albumId]);
//
//     const onItemHandler = (value, index) => {
//         setItemFound(items.find(item => item.id === value));
//         // console.log(itemFound.current);
//         selectedCardIndex.current = index;
//         console.log("on", selectedCardIndex.current);
//         setIsShowing(true);
//     };
//
//     const forwardHandler = () => {
//         console.log("init forward", selectedCardIndex.current);
//         selectedCardIndex.current += 1;
//         console.log("after forward", selectedCardIndex.current);
//
//         if (selectedCardIndex.current < items.length) {
//             setItemFound(
//                 items.find((item, index) => index === selectedCardIndex.current)
//             );
//             console.log("get forward item", itemFound);
//         } else {
//             setIsShowing(false);
//             return;
//         }
//     };
//
//     const backwardHandler = () => {
//         console.log("init backward", selectedCardIndex.current);
//         selectedCardIndex.current -= 1;
//         console.log("after backward", selectedCardIndex.current);
//
//         if (selectedCardIndex.current >= 0) {
//             setItemFound(
//                 items.find((item, index) => index === selectedCardIndex.current)
//             );
//             console.log("get backward item", itemFound);
//         } else {
//             setIsShowing(false);
//             return;
//         }
//     };
//
//     const offItemHandler = () => {
//         setIsShowing(false);
//     };
//
//     return (
//         <div>
//             <div className="controller-button-container">
//                 <Link to="/">
//                     <button className="controller-button" value="home">
//                         All Albums
//                     </button>
//                 </Link>
//             </div>
//             {isLoading && (
//                 <div className="loading">
//                     <p>...loading</p>
//                 </div>
//             )}
//             <p className="page-title-message">
//                 You have chosen <span>Album {albumId}</span>. Total of {items.length}{" "}
//                 photos to explore. Enjoy!
//             </p>
//             <div className="items-container">
//                 <p>Profile Name: {albumId}</p>
//                 <p>Nationality:</p>
//                 <p>Introduction:</p>
//                 <br/>
//                 <h3>Featured works:</h3>
//                 <br/>
//                 <br/>
//                 {items.map((item, index) => (
//                     <div>
//                     <Card key={item.id} onClick={() => onItemHandler(item.id, index)}>
//                         <img
//                             src={"https://via.placeholder.com/100x70.png"}
//                             alt={`data thumbnail`}
//                         />
//                         <h6>#{item.id}</h6>
//                         <p>some titles</p>
//                         <p>Some Description</p>
//                         <p>Some extra info</p>
//                         <Link to="/Profile">Profile</Link>
//
//                     </Card>
//
//                     </div>
//
//                 ))}
//             </div>
//             {isShowing && (
//                 <div className="loading">
//                     <button className="backwardButton" onClick={backwardHandler}>
//                         &#60;
//                     </button>
//                     <div className="item-container">
//                         <button className="offItemButton" onClick={offItemHandler}>
//                             X
//                         </button>
//                         <img
//                             src={"https://via.placeholder.com/760x452.png"}
//                             alt={`data pic`}
//                         />
//                         <div>
//                             <h1>Repertoire{itemFound.id}</h1>
//                             <h3>{itemFound.title}</h3>
//                         </div>
//
//                     </div>
//                     <button className="forwardButton" onClick={forwardHandler}>
//                         &#62;
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default AlbumItemsPage;

import React, { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import Card from "../../Card";

import {useLocation, useParams} from "react-router";
import {Container, Col, Row} from 'react-bootstrap';
import "./Composer.css";
import placeholder from "../../img/placeholder.png";
import Button from "react-bootstrap/Button";
import {Helmet} from "react-helmet";
import sharePic from "../../img/piece.png";
import Footer from "../../Footer";


const firstRow = {
    height:'100px',
    background:'#ddd8ab',
    width:'100%'
};
const secondRow = {
    height: '600px',
    background: '#f7e4aa',
    width: '100%',
    display:'flex',
    justifyContent: 'center'
}
const imageDiv = {
    height: '600px',
    background: '#f9d49c',
    width: '100%',
    display:'flex',
    justifyContent: 'center'
}
const secondLeft = {
    height: '600px',
    background: '#f6c193',
    width: '50%'
}
const secondRight = {
    height: '200px',
    background:'#f0aa89',
    width:'100%'
}
const down ={
    minHeight:'300px',
    height:'auto',
    background:'#e4a082',
    width:'98%',
    marginHorizontal:'auto'
}

const font = {
    fontSize: 40,
    color: "#d3967b",
    textAlign: "center",
    paddingTop: "100px",
}

const Profile = () => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { _id } = useParams();
    const location = useLocation();
    let navigate = useNavigate();
    const [URL,setURL] = useState([]);
    const composerName = document.getElementById("URL");

    const searchComposer= (e) => {
        // setInfo(e.target.value);
        const URL = `${e.target.value}`;
        const URLF = URL.split(' ')[0];
        // alert(URLF);
        setURL(URL);
        //console.log(URL);
        navigate(`/piece/${URLF}`, {state: URLF});
    }
   useEffect(() => {
       setIsLoading(true);
       const fetchData = async () => {
           const result = await fetch(`http://localhost:3000/api/composers/`);
           const resultJson = await result.json();

           setAlbums(resultJson);
           setIsLoading(false);
       };
       fetchData();
   }, []);

    return (
        <div>
            {isLoading && (
                <div className="loading">
                    <p>...loading</p>
                </div>
            )}

            <Container>
                <Helmet>
                    <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=635087349dc3400019b69556&product=inline-share-buttons&source=platform" async="async"></script>
                </Helmet>
                <br/><br/><br/><br/>
                <Row style={firstRow}>
                    <Col> <h1 id="URL">{Object.values(location.state.name)}</h1></Col>
                </Row>
                <Row style={secondRow}>
                    <Col md={6} style={secondLeft}>
                        {/*image: {typeof JSON.stringify(location.state.image)}*/}

                        {/*<img src={require(`${JSON.stringify(location.state.image)}`)}/>*/}
                        <div style={imageDiv}>
                            <img src="/image/placeholder.png" alt="composer avatar" style={{ width: 260, height: 280, margin:"auto" }}/>
                        </div>
                        {/*image source:https://stock.adobe.com/au/search?k=placeholder&asset_id=233462402*/}

                    </Col>
                    <Col md="auto" style={secondLeft}>
                        <Row style={secondRight}><h3>Country:</h3><br/><p> {Object.values(location.state.nationality)}</p></Row>
                        <Row style={secondRight}><h3>DOB:</h3><br/> <p>{Object.values(location.state.DOB)}</p></Row>
                        <Row style={secondRight}><h3>Website:</h3><br/> <p>{Object.values(location.state.website)}</p></Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="auto" style={down}><h3>Biography:</h3><br/> <p>{Object.values(location.state.biography)}</p><Button variant="primary" class="mt-auto btn" value={location.state.name} onClick={searchComposer}>View her piece</Button></Col>
                    <Col></Col>
                </Row>
            </Container>

            <br/>
            <div className="sharethis-inline-share-buttons" data-url="https://www.facebook.com/coreliaproject/" data-title="Corelia project" data-image={sharePic} data-description="Corelia project aims to build a centralised database for female composers" data-message="Hey look what I found, this website is awesome, check it out!" data-email-subject="I wanna share this with you"></div>
            <br/><br/>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Profile;
