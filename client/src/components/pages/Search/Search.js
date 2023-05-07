import React, { useEffect } from 'react';
import useState from 'react-usestateref';
import styled from "styled-components";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
//import { search } from '../../../../../server/routes/search';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FluteImg from '../../../img/flute.jpg';
import ClarinetImg from '../../../img/clarinet.jpg';
import Container from 'react-bootstrap/Container';
// import placeholder1 from '../../img/placeholder.png';

const containerS={
    minWidth:"1200px",
    height:"auto",
    justifyContent:"center"

}

const rowS={
    minWidth:"1200",
    width:"auto",
    height:"auto",
    justifyContent:"center"
}

const Search = () => {
    const navigate = useNavigate();
    const [searchArray, setSearchArray,arrayRef] = useState(["composer","","",""]);
    const [URL,setURL,URLRef] = useState([""]);
    const [info,setInfo,infoRef] = useState([]);
    const [inputarea,setInputarea,inputRef] = useState([]);
    const [open, setOpen] = useState(false);
    const searchItems = (searchValue,type) => {
        let newSearchArray;
        if (type === "searchInput"){
            newSearchArray = [...searchArray];
            newSearchArray[1] = searchValue;
            setSearchArray(newSearchArray);
        }
        if (type === "filterInput1"){
            newSearchArray = [...searchArray];
            newSearchArray[2] = searchValue;
            setSearchArray(newSearchArray);
        }
        if (type === "filterInput2"){
            newSearchArray = [...searchArray];
            newSearchArray[3] = searchValue;
            setSearchArray(newSearchArray);
        }
        if (type === "filterInput3"){
            newSearchArray = [...searchArray];
            newSearchArray[4] = searchValue;
            setSearchArray(newSearchArray);
        }
        if (type === "searchBy"){
            setInputarea("");
            newSearchArray = [...searchArray];
            newSearchArray[2] = "";
            newSearchArray[3] = "";
            newSearchArray[4] = "";
            newSearchArray[0] = searchValue;
            setSearchArray(newSearchArray);
        }          
    };
    const generateSearchURL = (newValue) => {
        if(newValue[0] === "composer"){
            setURL(`${newValue[0]}?key=${newValue[1]}&nationality=${newValue[2]}`);
        }
        else{
            setURL(`${newValue[0]}?key=${newValue[1]}&instrument=${newValue[3]}&publisher=${newValue[4]}`)//piece?key=input&instrument=filter2&publisher=filter3
        }
    };
    const onClickSearchHandler = async () => {
        generateSearchURL(arrayRef.current);
            axios
            .get('http://localhost:3000/api/search/'+URLRef.current
        )
            .then(res =>{
                setInfo(res.data);
            })
            .catch(err =>{
                console.log("Error from getting data: "+err)
            })
            navigate(URLRef.current);
    };
    
    return (
    <><StyledSearch>
            <div class="container mt-2">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-12">
                        <div class="card p-3  py-4">
                            <h5>Search to explore the greatest female composers</h5>
                            <div class="row g-3 mt-2">
                                <div class="col-md-3 dropdown">
                                    <Form.Select aria-label="Default select example" onClick={(e) => searchItems(e.target.value, "searchBy")}>
                                        <option value="composer">Search By Composer</option>
                                        <option value="piece">Search By Piece</option>
                                    </Form.Select>
                                </div>
                                
                                <div class="col-md-6" >
                                    <input type="text" class="form-control" onChange={(e) => searchItems(e.target.value, "searchInput")} placeholder="Enter keywords..." />
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-secondary btn-block" onClick={onClickSearchHandler} type='submit'>Search Results</button>
                                </div>
                            </div>
                            <div class="mt-3">
                                <a
                                    onClick={() => setOpen(!open)}
                                    aria-controls="advancedSearch"
                                    aria-expanded={open}
                                >
                                    Advanced Search with Filters
                                    <i class="fa fa-angle-down"></i></a>
                                <Collapse in={open}>
                                    <div id="advancedSearch">
                                        <div class="card card-body">
                                                    {arrayRef.current[0] === "piece" ?(
                                                    <div class="row">
                                                    <div class="col-md-4">
                                                    <input type="text" placeholder="Please input the instrument you want to search..." class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput2")} />
                                                    </div>
                                                    <div class="col-md-4">
                                                    <input type="text" placeholder="Please input the publisher you want to search..." class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput3")} />
                                                    </div>
                                                    <div class="col-md-4">
                                                    <input value={inputarea} type="text" disabled class="form-control" placeholder="Nationality can be only filtered with name." onChange={(e) => searchItems(e.target.value, "filterInput1")} />
                                                    </div>
                                                    </div>
                                                    ):(
                                                    <div class="row">
                                                    <div class="col-md-4">
                                                    <input type="text" value={inputarea} disabled placeholder="Instruments can be only filtered with piece." class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput2")} />
                                                    </div>
                                                    <div class="col-md-4">
                                                    <input type="text" value={inputarea} disabled placeholder="Publisher can be only filtered with piece." class="form-control" onChange={(e) => searchItems(e.target.value, "filterInput3")} />
                                                    </div>
                                                    <div class="col-md-4">
                                                    <input type="text" class="form-control" placeholder="Please input the nationality you want to search..." onChange={(e) => searchItems(e.target.value, "filterInput1")} />
                                                    </div>
                                                    </div>
                                                    )
                                                    }
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledSearch>
        <Container style={containerS}>
        <br></br><br></br><br></br><br></br><br></br>
          <Row class="d-flex row">
            {arrayRef.current[0] === "composer" ? (
                infoRef.current.map((item) =>{
                    console.log("mapped items");
                    return(
                            <div class="col col-4 d-flex justify-content-center">
                            <Card>
                            <Card.Img variant="top" src="/image/placeholder.png" alt="Image of the composer."/>
                            <Card.Body class="card-body">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                Nationality: {item.nationality}.<br></br>
                                Date: {item.DOB}.<br></br>
                                Personal website: {item.website}.<br></br>
                                Biography: {item.biography.substring(0, 200)}.<br></br>
                                </Card.Text>
                                <Link
                                to={{pathname:`/api/composers/${item._id}`}}
                                state={{
                                    _id:item._id,
                                    name: item.name,
                                    nationality:item.nationality,
                                    DOB:item.DOB,
                                    website:item.website,
                                    biography:item.biography,
                                    image:item.image

                                }}
                                key={item.name}
                                style={{ textDecoration: "none", color: "black" }}
                                >
                                <Button variant="primary" class="mt-auto btn">View more details.</Button>
                                </Link>
                            </Card.Body>
                            </Card>                        
                        </div>
                        
                    )
                })
                ):(info.map((item) =>{
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
                                <Button variant="primary" class="mt-auto btn">Explore now!</Button>
                                </Link>
                            </Card.Body>
                            </Card>
                        </div> 
                    )
                    })
                )
            }            
          </Row><br></br>
        </Container>            
        </>
    );
};



const StyledSearch = styled.div`
padding-top: 5rem;
  height:20rem;
 
.advanced{
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
}

.btn-secondary,
.btn-secondary:focus,
.btn-secondary:active{
  color: #fff;
  background-color: #00838f !important;
  border-color: #00838f !important;
  box-shadow: none;
}

.advanced{
  color: #00838f !important;
}

.form-control:focus{
  box-shadow: none;
  border: 1px solid #00838f;

}
.row{
  height:5rem;
}
.card{
  width:100%;
  margin:0;
}
.container{
    width:100%;
}
`
;

export default Search;