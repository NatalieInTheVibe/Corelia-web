import React, {useEffect } from "react";
import useState from 'react-usestateref';
import {useLocation} from "react-router-dom";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";


const InstrumentChild = () => {
    const URL = useLocation();
    console.log(URL.state,"data from child element");
    const [info,setInfo,infoRef] = useState([]);
    const [isLoading,setLoading,loadingRef] = useState(true);

    const containerS={
        minWidth:"1200px",
        height:"auto",
        justifyContent:"center",
        paddingTop:"10%"
    
    }

    useEffect(()=>{
        axios
        .get('http://localhost:3000/api/search/instrument/'+URL.state)
        .then(res =>{
            setInfo(res.data);
            //console.log(infoRef.current);
            console.log(infoRef.current);
            console.log(URL.state.URL);  
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
        <Container style={containerS}>
          <Row class="d-flex row">
          {infoRef.current.map((item) =>{
            //piece
                    console.log("mapped items");
                    return(
                    <div class="col col-4 d-flex justify-content-center">
                            <Card>
                            <Card.Img variant="top" src="/image/piece.jpg" alt="Image for this piece"/>
                            <Card.Body class="card-body">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                Composer: {item.composer.name}.<br></br>
                                Duration: {item.duration} mins.<br></br>
                                Year: {item.year}<br></br>
                                Instruments: {item.instruments}.<br></br>
                                Publisher: {item.publisher}.<br></br>
                                Score Link: {item.scoreLink}.<br></br>
                                </Card.Text>
                                {/* <Link to='/recommendation/ailis'> */}
                                <Link
                                    to={{pathname:`/api/pieces/${item._id}`,state:`${item._id}`}}
                                    state={{
                                        _id:item._id,
                                        name: item.name,
                                        composer:item.composer.name,
                                        duration:item.duration,
                                        publishyear:item.year,
                                        instruments:item.instruments,
                                        links:item.recordingLink,
                                        publisher:item.publisher,
                                        scorelink:item.scoreLink,
                                        image:item.image

                                    }}
                                    key={item.name}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                {/* <a href={item.recordingLink}> */}
                                <Button variant="primary" class="mt-auto btn">Explore now!</Button>
                                {/* </a> */}
                                </Link>
                            </Card.Body>
                            </Card>
                    </div> 
                    )
          })}
          </Row>
        </Container>
        );
    
};

export default InstrumentChild;