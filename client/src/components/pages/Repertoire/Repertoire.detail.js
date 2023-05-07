import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";
import "./Repertoire.css";
import {useLocation, useParams} from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import pieces from "../../img/piece.png";
import { RWebShare } from "react-web-share";
import share from "./share";
import save from "./saveFacebook";
import {Helmet} from "react-helmet";
import sharePic from "../../img/piece.png";
import HomeFooterJoinUs from "../../home-footer-joinUs";
import Footer from "../../Footer";

const firstRow = {
    height:'600px',

    background:'#acbc8a',
    width:'100%'
};
const firstLeft = {
    height: '600px',
    background: '#ecd189',
    width: '50%'
}
const firstRight = {
    height: '150px',
    background: '#e99469',
    width: '104.5%'
}
const firstRight2 = {
    height: '150px',
    background: '#f2b476',
    width: '104.5%'
}
const thirdRow = {
    height: '150px',
    background:'#db6b5c',
    width:'100%'
}
const down ={
    height:'100px',
    background:'#bc5952',
    width:'100%'
}
const downLeft ={
    height:'100px',
    background:'#934948',
    width:'50%'
}
const imgWrapper ={
    display:'flex',
    justifyContent:'center',
    marginTop: '30%'
}
const imgStyle ={
    width:'350px',
    height:'auto'
}
const buttonS = {
    border:"none",
    overflow:"hidden"
}

const Profile = () => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { _id } = useParams();
    const location = useLocation();
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const result = await fetch(`http://localhost:3000/api/pieces/`);
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
                    <script async defer crossOrigin="anonymous"
                            src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v15.0&appId=407443791582428&autoLogAppEvents=1"
                            nonce="8Fv7OSP4">
                    </script>
                    <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=635087349dc3400019b69556&product=inline-share-buttons&source=platform" async="async"></script>
                </Helmet>
                <br/><br/><br/><br/>
                <Row style={firstRow}>
                    <div><h3>Piece details  - {Object.values(location.state.name)}</h3></div>
                    <Col md={6} style={firstLeft}>
                        {/*<div>image: {Object.values(location.state.image)}</div>*/}
                        <div style={imgWrapper}><img src="/image/piece.jpg" alt="Repertoire picture not available" style={imgStyle}/></div>
                    </Col>
                    <Col md="auto" style={firstLeft}>
                        <Row style={firstRight}>
                            <Col style={firstRight}><h4>Name: </h4><br/><p>{Object.values(location.state.name)}</p></Col>
                            <Col style={firstRight}><h5>Publish year:</h5> <br/><p>{Object.values(location.state.publishyear)}</p></Col>
                        </Row>
                        <Row style={firstRight2}><h4>Instruments: </h4><br/><p>{Object.values(location.state.instruments)}</p></Row>
                        <Row style={firstRight2}><h4>Publisher:</h4><br/><p>{Object.values(location.state.publisher)}</p></Row>
                        <Row style={firstRight2}><h4>Composer:</h4> <br/><p>{Object.values(location.state.composer)}</p></Row>
                    </Col>
                </Row>
                <Row style={thirdRow}>
                    <Col style={firstRight}><h4>Score link:</h4> <br/><p>{Object.values(location.state.name)}</p></Col>
                </Row>
                <Row style={down}>
                    <Col md="auto" style={downLeft}><h4>Recording link: </h4><br/><p>{Object.values(location.state.links)}</p></Col>
                    <Col md="auto" style={downLeft}><h4>Duration:</h4><br/><p> {Object.values(location.state.duration)} min</p></Col>
                    <Col>
                        {/*<div className="fb-share-button"*/}
                        {/*     data-href="https://www.facebook.com/coreliaproject/"*/}
                        {/*     data-layout="button_count">*/}
                        {/*</div>*/}
                        <br/>
                        <div className="sharethis-inline-share-buttons" style={buttonS} data-url="https://www.facebook.com/coreliaproject/" data-title="Corelia project" data-image={sharePic} data-description="Corelia project aims to build a centralised database for female composers" data-message="Hey look what I found, this website is awesome, check it out!" data-email-subject="I wanna share this with you"></div>

                        <br/>
                        <div className="fb-comments"
                             data-href="https://stackoverflow.com/questions/61614313/adding-meta-tags-on-react-js" data-width=""
                             data-numposts="5">
                        </div>
                        {/*<div className="fb-save"*/}
                        {/*     data-href="https://www.facebook.com/marketplace/item/3241594159403663/?hoisted=false&ref=browse_tab&referral_code=marketplace_top_picks&referral_story_type=top_picks"*/}
                        {/*     data-uri="https://blog.hootsuite.com/how-to-create-social-media-buttons/">*/}
                        {/*</div>*/}
                    </Col>
                </Row>
            </Container>
            {/*<helmet>*/}
            {/*    <meta property="og:url"           content="http://localhost:3001/api/pieces/" />*/}
            {/*    <meta property="og:type"          content="Corelia" />*/}
            {/*    <meta property="og:title"         content="Corelia Project" />*/}
            {/*    <meta property="og:description"   content="Composer' pieces" />*/}
            {/*    <meta property="og:image"         content="https://www.your-domain.com/path/image.jpg" />*/}
            {/*</helmet>*/}
            {/*<div id="fb-root"></div>*/}
            {/*<helmet>*/}
            {/*    <script type="text/javascript" src={share}></script>*/}
            {/*    <script type="text/javascript" src={save}></script>*/}
            {/*</helmet>*/}


            {/*<Row>*/}
            {/*    <Col>*/}
            {/*        <iframe*/}
            {/*            src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&appId=407443791582428&width=96&height=20"*/}
            {/*            width="96" height="20" style={buttonS} scrolling="no" frameBorder="0"*/}
            {/*            allowFullScreen="true"*/}
            {/*            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <br/><br/>

        </div>
    );
};

export default Profile;