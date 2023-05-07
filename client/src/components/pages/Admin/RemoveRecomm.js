import React ,{useEffect}from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../Recommendation/Recommendation.css";
// import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useState from 'react-usestateref';
import axios from "axios";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import background from '../../img/admin.png';

//the button to be added (for search related piece of the author)

const RemoveRecomm = () => {
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
    const tokens = sessionStorage.getItem('tokens');
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': tokens
          }
      };
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

    const onClickRemoveRecomm = (item) =>{
        const id = item._id;
        console.log(id);
        axios
        .delete('http://localhost:3000/api/recommends/'+id,config)
        .then(res =>{
            console.log(res);
            navigate('/admin/recommendation');
            alert("Sucessfully removed recommendation!");
        })
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
                    <hr></hr>
                    <Button variant="primary" class="mt-auto btn" onClick={(e) => onClickRemoveRecomm(item)}>Remove this recommendation.</Button>

                    {/* </Link> */}
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
       
    </>
      ))}
      </Row><br></br>
    </Container>

        </>
        
    );
};

export default RemoveRecomm;