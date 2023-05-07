import React from "react";
import "./Admin.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";
import "../Composer/Composer.css";
import composerP from "../../img/composerP.jpg";
import axios from "axios";

import pieces from "../../img/piece.png";

import {useNavigate} from "react-router-dom";

const RemovePiece = () => {
    const navigate = useNavigate();
    const imgStyle = {
        width:"250px",
        height:"auto"
    }
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    //const [id,setID] = useState([]);
    const tokens = sessionStorage.getItem('tokens');
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': tokens
          }
      };
    const onClickRemovePiece = (piece) =>{
        const id = piece._id;
        console.log(id);
        axios
        .delete('http://localhost:3000/api/pieces/'+id,config)
        .then(res =>{
            console.log(res);
            navigate('/admin/piece');
            alert("Sucessfully removed piece!");
        })
    }



    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const result = await fetch("http://localhost:3000/api/pieces/");
            const resultJson = await result.json();

            setAlbums(resultJson);
            setIsLoading(false);
        };
        fetchData();
    }, []);
    return (
        <>
    <Navbar  key="false" bg="light" expand="false"  className="mb-3" position="fixed">
      <Container fluid>
        <Navbar.Brand href="/admin">The Admin Center</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-false`}
          aria-labelledby={`offcanvasNavbarLabel-expand-false`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
              Admin
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavDropdown
                title="Composer Management"
                id={`offcanvasNavbarDropdown-expand-false`}
              >
                <NavDropdown.Item href="/admin/composer">
                  Show composer
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/admin/addcomposer">
                  Add composer
                </NavDropdown.Item>
                
                <NavDropdown.Item href="/admin/removecomposer">
                  Remove composer
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Repertoire Management"
                id={`offcanvasNavbarDropdown-expand-false`}
              >
                <NavDropdown.Item href="/admin/piece">
                  Show piece list
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/admin/addpiece">
                  Add piece
                </NavDropdown.Item>
                
                <NavDropdown.Item href="/admin/removepiece">
                  Remove piece
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Recommendation Management"
                id={`offcanvasNavbarDropdown-expand-false`}
              >
                <NavDropdown.Item href="/admin/recommendation">
                  Show recommendation
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/admin/addrecommendation">
                  Add recommendation
                </NavDropdown.Item>
                
                <NavDropdown.Item href="/admin/removerecommendation">
                  Remove recommendation
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/"><strong>Return to Homepage</strong></Nav.Link>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
      
        <div>
            {isLoading && (
                <div className="loading">
                    <p>...loading</p>
                </div>
            )}
            <div className="albums-container">
                {albums.map(piece => (
                    <Link
                        to={{pathname:`/api/pieces/${piece._id}`,state:`${piece._id}`}}
                        state={{
                            _id:piece._id,
                            name: piece.name,
                            composer:piece.composer.name,
                            duration:piece.duration,
                            publishyear:piece.year,
                            instruments:piece.instruments,
                            links:piece.recordingLink,
                            publisher:piece.publisher,
                            scorelink:piece.scoreLink,
                            image:piece.image

                        }}
                        key={piece.name}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <Card className="albums-card">
                            <img
                                src="/image/piece.jpg"
                                // src={album.image}
                                // image source: https://maxmaraliving.com.au/team/terry/image-placeholder/
                                alt={`data thumbnail`}
                            />
                            <h5>{piece.name}</h5>
                            <p><strong>Instrument</strong>: {piece.instruments}</p>
                            <p>Name: {piece.recordingLink}</p>
                            <button onClick={(e) => onClickRemovePiece(piece)}>
                                Remove this piece
                            </button>

                        </Card>
                    </Link>
                ))}
            </div>
        </div>
        </>
    

    )};
export default RemovePiece;
