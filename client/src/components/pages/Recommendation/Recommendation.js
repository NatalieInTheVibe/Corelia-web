import React ,{useEffect}from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./Recommendation.css";
// import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useState from 'react-usestateref';
import axios from "axios";
import Footer from "../../Footer";

//the button to be added (for search related piece of the author)

const Recommendation = () => {
    let navigate = useNavigate(); 
    const mystyle = {
        //color: "white",
        backgroundColor: "ghostwhite",
        padding: "10px",
        fontFamily: "Arial",
        fontSize :"1.8vw"
      };
      
    const mystyleText = {
    //color: "white",
    backgroundColor: "aliceblue",
    fontFamily: "Arial",
    textAlign: 'left',
    fontSize :"1.2vw"
    };

    const [id,setId,idRef] = useState([]);

    const onClickJumpDetailPage =(item)=>{
        const title = item.title;
        console.log(title);
        // axios
        // .get('http://localhost:3000/api/search/recommend/'+title)
        // .then(res =>{
        //     console.log(res);
        //     setId(res.data._id);
        //     console.log(idRef.current);
        navigate(`/recommendation/${title}`,{state:{title}});
        // })
    }
    const [recommendation,setRecommendation,recommendationRef] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:3000/api/recommends");
            const resultJson = await result.json();
            // const sliceResult = resultJson.slice(0, 10);
            setRecommendation(resultJson);
        };
        fetchData();
    }, []);
    
    return (
    <Container style={{ marginLeft: "auto",marginRight: "auto", paddingTop: "120px", fontSize: "20px" }}>
      <Row class="d-flex row">
      {recommendationRef.current.map(item => (
    <>
        <div class="col col-4 d-flex " style={{ position: "center"}}>
            {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body  class="card-body">
                    <Card.Title style={mystyle}>{item.title}</Card.Title>
                    <hr></hr>
                    <Card.Text style={mystyleText}>
                        {item.body.substring(0, 200)}... ...<br></br>
                        <hr></hr>
                        <p>Publish date: {item.date}</p>
                    </Card.Text>
                    {/* <Link to='/recommendation/ailis'> */}
                    <Button variant="primary" class="mt-auto btn" onClick={(e) => onClickJumpDetailPage(item)}>View more details.</Button>
                    {/* </Link> */}
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
       
    </>
      ))}
      </Row><br></br>
      <br/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <footer>

        <Footer />
      </footer>
    </Container>
        
    );
};

export default Recommendation;