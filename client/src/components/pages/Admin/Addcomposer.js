import React from "react";
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
    const [composerInfo, setComposerInfo, ComposerInfoRef] = useState(["","","She does not have a website","Biography unknown.","../../img/placeholder.png",""]);
    const inputItems = (searchValue,type) => {
        let newComposerInfo;
        if (type === "name"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[0] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "nationality"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[1] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "website"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[2] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "biography"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[3] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "dob"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[5] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        console.log(searchValue,type,ComposerInfoRef);
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
        jsonObj["name"] = ComposerInfoRef.current[0];
        jsonObj["nationality"] = ComposerInfoRef.current[1];
        jsonObj["website"] = ComposerInfoRef.current[2];
        jsonObj["biography"] = ComposerInfoRef.current[3];
        jsonObj["image"] = ComposerInfoRef.current[4];
        jsonObj["DOB"] = ComposerInfoRef.current[5];
        
        axios
        .post('http://localhost:3000/api/composers/admin',jsonObj,config)
        .then(res=>{
          console.log(sessionStorage.getItem('tokens'));
          console.log(res);
          if (res.status == "200"){
            navigate('/admin/composer');
            alert("Sucessfully added composer!");
            
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" onChange={(e)=>inputItems(e.target.value,"name")}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nationality</Form.Label>
                <Form.Control type="nationality" placeholder="Enter Nationality"  onChange={(e)=>inputItems(e.target.value,"nationality")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Website</Form.Label>
                <Form.Control type="website" placeholder="Enter Website"  onChange={(e)=>inputItems(e.target.value,"website")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Biography</Form.Label>
                <Form.Control type="biography" placeholder="Enter Biography"  onChange={(e)=>inputItems(e.target.value,"biography")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Year of birth</Form.Label>
                <Form.Control type="dob" placeholder="Enter Year of birth"  onChange={(e)=>inputItems(e.target.value,"dob")}/>
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
