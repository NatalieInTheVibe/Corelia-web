import React, { useEffect } from "react";
import useState from 'react-usestateref';
import "./Admin.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../Composer/Composer.css";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router";


const Addcomposer = () => {
    const [composer, setComposer] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:3000/api/composers/");
            const resultJson = await result.json();

            setComposer(resultJson);
        };
        fetchData();
    }, []);

    const [composerInfo, setComposerInfo, ComposerInfoRef] = useState(["","","","","","Recording Link unknown.","Publisher unkown.","ScoreLink unknown","../../img/placeholder.png"]);
    const inputItems = (searchValue,type) => {
        let newComposerInfo;
        if (type === "id"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[0] = searchValue;
            setComposerInfo(newComposerInfo);
            console.log(searchValue);
        }
        if (type === "name"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[1] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "duration"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[2] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "year"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[3] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "instruments"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[4] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "recordinglink"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[5] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "publisher"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[6] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "scorelink"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[7] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        
        console.log(searchValue,type,ComposerInfoRef.current);
    }
    const tokens = sessionStorage.getItem('tokens');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': tokens
        }
    };
    

    //const tokens = user.data.id; 
    const navigate = useNavigate();
    const onSubmitListener = () =>{
        //const JSON = JSON.stringify(ComposerInfoRef.current);
        var jsonObj = {};
        jsonObj["composerID"] = ComposerInfoRef.current[0];
        jsonObj["name"] = ComposerInfoRef.current[1];
        jsonObj["duration"] = ComposerInfoRef.current[2];
        jsonObj["year"] = ComposerInfoRef.current[3];
        jsonObj["instruments"] = ComposerInfoRef.current[4];
        jsonObj["recordingLink"] = ComposerInfoRef.current[5];
        jsonObj["publisher"] = ComposerInfoRef.current[6];
        jsonObj["scoreLink"] = ComposerInfoRef.current[7];
        jsonObj["image"] = ComposerInfoRef.current[8];
        
        axios
        .post('http://localhost:3000/api/pieces/admin',jsonObj,config)
        .then(res=>{
          console.log(sessionStorage.getItem('tokens'));
          console.log(res);
          if (res.status == "200"){
            
            navigate("/admin/piece");
            alert("Sucessfully added piece!");
          }
        })
        .catch(err =>{
            console.log("Error from posting data: "+err)
        })


    }

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

        <Form style={{paddingLeft:"10%",paddingRight:"10%"}}>
            <Form.Select onChange={(e)=>inputItems(e.target.value,"id")}>
            <option>Select the composer</option>
            {composer.map(item => (
                
                <option value={item._id} >{item.name}</option>
            
            ))}
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Piece Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Piece Name" onChange={(e)=>inputItems(e.target.value,"name")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Duration</Form.Label>
                <Form.Control type="duration" placeholder="Enter Duration"  onChange={(e)=>inputItems(e.target.value,"duration")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Year</Form.Label>
                <Form.Control type="year" placeholder="Enter Year"  onChange={(e)=>inputItems(e.target.value,"year")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Instruments</Form.Label>
                <Form.Control type="instruments" placeholder="Enter Instruments"  onChange={(e)=>inputItems(e.target.value,"instruments")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Recording Link</Form.Label>
                <Form.Control type="recordinglink" placeholder="Enter Recording Link"  onChange={(e)=>inputItems(e.target.value,"recordinglink")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="publisher" placeholder="Enter Publishers"  onChange={(e)=>inputItems(e.target.value,"publisher")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Score Link</Form.Label>
                <Form.Control type="scorelink" placeholder="Enter Score Link"  onChange={(e)=>inputItems(e.target.value,"scorelink")}/>
            </Form.Group>
            
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" onClick={onSubmitListener}>
        Add
      </Button>
    </Form>
      
        </>

        //add composer （edit composer)

        //add recommendation (delete recommendation)

        //add repertoire （edit piece)

    )};
export default Addcomposer;
