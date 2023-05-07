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

import {useNavigate} from "react-router-dom";

const Removecomposer = () => {
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
    const onClickRemoveComposer = (album) =>{
        
        const id = album._id;
        console.log(id);
        axios
        .delete('http://localhost:3000/api/composers/'+id,config)
        .then(res =>{
            console.log(res);
            navigate('/admin/composer');
            alert("Sucessfully removed composer!");
        })
    }

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const result = await fetch("http://localhost:3000/api/composers");
            const resultJson = await result.json();
            // const sliceResult = resultJson.slice(0, 10);
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
                {albums.map(album => (
                        <Card className="albums-card">
                            <div>
                            <img
                                // src={"https://via.placeholder.com/168x118.png"}
                                // src={album.image}
                                src="/image/placeholder.png"
                                alt={`data thumbnail`}
                                style={imgStyle}
                            />
                            <h5>{album.name}</h5>
                            <h6>{album.nationality}</h6>
                            </div>
                            <button onClick={(e) => onClickRemoveComposer(album)}>
                                Remove this composer
                            </button>
                        </Card>
                    // </Link>
                ))}
            </div>
        </div>
        </>
    
    // <Nav justify variant="tabs" defaultActiveKey="/admin"  class="adminnav nav nav-tabs nav-justifed">
    //     <Nav.Item>
    //         <Nav.Link href="/admin">Overview</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link eventKey="composer">View Composer Data</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link eventKey="recommdation">View Recommendation Info</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link eventKey="repertoire">View Repertoire Info</Nav.Link>
    //     </Nav.Item>
    // </Nav>

  //   <div class="flex-shrink-0 p-3 bg-white" width="280px">
  //   <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      
  //     <span class="fs-5 fw-semibold">Collapsible</span>
  //   </a>
  //   <ul class="list-unstyled ps-0">
  //     <li class="mb-1">
  //       <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
  //         Home
  //       </button>
  //       <div class="collapse show" id="home-collapse">
  //         <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
  //           <li><a href="#" class="link-dark rounded">Overview</a></li>
  //           <li><a href="#" class="link-dark rounded">Updates</a></li>
  //           <li><a href="#" class="link-dark rounded">Reports</a></li>
  //         </ul>
  //       </div>
  //     </li>
  //     <li class="mb-1">
  //       <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
  //         Dashboard
  //       </button>
  //       <div class="collapse" id="dashboard-collapse">
  //         <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
  //           <li><a href="#" class="link-dark rounded">Overview</a></li>
  //           <li><a href="#" class="link-dark rounded">Weekly</a></li>
  //           <li><a href="#" class="link-dark rounded">Monthly</a></li>
  //           <li><a href="#" class="link-dark rounded">Annually</a></li>
  //         </ul>
  //       </div>
  //     </li>
  //     <li class="mb-1">
  //       <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
  //         Orders
  //       </button>
  //       <div class="collapse" id="orders-collapse">
  //         <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
  //           <li><a href="#" class="link-dark rounded">New</a></li>
  //           <li><a href="#" class="link-dark rounded">Processed</a></li>
  //           <li><a href="#" class="link-dark rounded">Shipped</a></li>
  //           <li><a href="#" class="link-dark rounded">Returned</a></li>
  //         </ul>
  //       </div>
  //     </li>
  //     <li class="border-top my-3"></li>
  //     <li class="mb-1">
  //       <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
  //         Account
  //       </button>
  //       <div class="collapse" id="account-collapse">
  //         <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
  //           <li><a href="#" class="link-dark rounded">New...</a></li>
  //           <li><a href="#" class="link-dark rounded">Profile</a></li>
  //           <li><a href="#" class="link-dark rounded">Settings</a></li>
  //           <li><a href="#" class="link-dark rounded">Sign out</a></li>
  //         </ul>
  //       </div>
  //     </li>
  //   </ul>
  // </div>

        //add composer （edit composer)

        //add recommendation (delete recommendation)

        //add repertoire （edit piece)

    )};
export default Removecomposer;
