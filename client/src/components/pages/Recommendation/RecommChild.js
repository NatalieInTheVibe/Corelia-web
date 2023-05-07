// import React ,{useEffect}from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import "./Recommendation.css";
// // import {Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import {useState} from 'react-usestateref';
// import axios from "axios";

// import {useLocation} from "react-router-dom";

// //the button to be added (for search related piece of the author)

// const RecommChild = () => {
//     const title = useLocation();
//     console.log(title.state,"data from child element");
//     const [info,setInfo,infoRef] = useState([]);
//     const [isLoading,setLoading,loadingRef] = useState(true);

//     useEffect(() => {
//         console.log('useeffect');
//         axios
//         .get('http://localhost:3000/api/search/recommend/'+title.state.title)
//         .then(res=>{
//             setInfo(res.data);
//             console.log(infoRef.current);
//             setLoading(false);
//             console.log(res.data,"data from response");

//         })
//         .catch(err =>{
//             console.log("Error from getting data: "+err)
//         });
//     }, []);
//     if(loadingRef.current){
//         return <div> Loading...</div>
//     }
//     return (
import React, {useEffect } from "react";
import useState from 'react-usestateref';
import {useLocation} from "react-router-dom";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Footer from "../../Footer";

const RecommChild = () => {
    const URL = useLocation();
    console.log(URL.state,"data from child element");
    const [info,setInfo,infoRef] = useState([]);
    const [isLoading,setLoading,loadingRef] = useState(true);

    
    useEffect(()=>{
        axios
        .get('http://localhost:3000/api/search/recommend/'+URL.state.title)
        .then(res =>{
            setInfo(res.data);
            //console.log(infoRef.current);
            console.log(infoRef.current);
            console.log(infoRef.current.title);  
            setLoading(false);
            console.log(loadingRef.current);
        })
        .catch(err =>{
            console.log("Error from getting data: "+err)
        });
    },[]);
        if(loadingRef.current){
            return <div> Loading...</div>
        }
        return (
        <>
         
        <Container  style={{ marginLeft: "auto",marginRight: "auto", paddingTop: "120px", fontSize: "20px" }}>
        {infoRef.current.map((item) =>{
             console.log("mapped items");
             return(
            <div style={{ width: "800vm",paddingLeft:"10%",paddingRight:"10%"}}>
            <p>Recommendation for you</p>
            <hr></hr>
            <h1 style={{backgroundColor:"ghostwhite"}}>{item.title}</h1>
            <hr></hr>
            <p style={{color:"darkgray"}}>Post time: {item.date}</p>
            <h4 >{item.body}</h4>
            <hr></hr>
            </div>
            )
         }) }
        </Container>
        <br/><br></br><br></br><br></br><br></br><br></br>
        <footer>

        <Footer />
      </footer>
      

    </>
    
    )

};

export default RecommChild;