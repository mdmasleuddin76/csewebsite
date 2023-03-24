import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import logo from '../images/logo.png'

function Location() {
  return (
    
    <div>
      <Container>
      <h1 style={{fontWeight: 700,lineHeight: 2,textAlign: 'center',margin: '20px'}}>How to Reach Us?</h1>
        <Row>
            <Col sm>
                <img src={logo} />
                <p>Jamia Millia Islamia is located on the south-east corner of Delhi, near various beautiful places such as Lodhi Garden, Chattarpur Mandir and Lotus Temple. One may reach the University by road or by metro, It is well-connected and may take any of the following routes to reach it:</p>
                <h5>NEW DELHI RAILWAY STATION</h5>
                <p>It takes just under an hour to travel the 13.3 km between the station and the University, via Mathura road. Buses, Cabs, auto rickshaws, etc. are the various modes from which one may choose to cover the distance, if there is no private vehicles available at disposal.</p>
                <h5> INDIRA GANDHI INTERNATIONAL AIRPORT</h5>
                <p> The 19 kilometers between the airport and University usually requires an hour to commute via road.</p>
                <h5> METRO</h5>
                <p> Nearest metro stations are 'Jamia Millia Islamia' and 'Sukhdev Vihar', on magenta line, which are at walking distance from the University.</p>
                <h5> BUS STATION</h5>
                <p> There are numerous bus stops near the University that help enhance the connectivity between Jamia and the rest of the city.</p>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Location;
