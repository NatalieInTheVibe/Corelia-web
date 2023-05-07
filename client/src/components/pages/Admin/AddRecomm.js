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


const AddRecomm = () => {
    const [composerInfo, setComposerInfo, ComposerInfoRef] = useState(["","","/image/placeholder.png"]);
    const inputItems = (searchValue,type) => {
        let newComposerInfo;
        if (type === "title"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[0] = searchValue;
            setComposerInfo(newComposerInfo);
        }
        if (type === "content"){
            newComposerInfo = [...composerInfo];
            newComposerInfo[1] = searchValue;
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
    
    const navigate = useNavigate();
    const onSubmitListener = () =>{
        var jsonObj = {};
        jsonObj["title"] = ComposerInfoRef.current[0];
        jsonObj["body"] = ComposerInfoRef.current[1];
        jsonObj["image"] = ComposerInfoRef.current[2];

        
        axios
        .post('http://localhost:3000/api/recommends/admin',jsonObj,config)
        .then(res=>{
          console.log(sessionStorage.getItem('tokens'));
          console.log(res);
          if (res.status == "200"){
            navigate('/admin/recommendation');
            alert("Sucessfully added recommendation!");
            
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
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="Enter Title" onChange={(e)=>inputItems(e.target.value,"title")}/>
                <Form.Text className="text-muted">
                The title of the recommendation article can be the composer name.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={8} type="content" placeholder="Enter Content"  onChange={(e)=>inputItems(e.target.value,"content")}/>
                {/* <Form.Control as="textarea" /> */}
            </Form.Group>


      <Button variant="primary" onClick={onSubmitListener}>
        Add
      </Button>
    </Form>
      
        </>

    )};
export default AddRecomm;
