import React from 'react'
import { Col, Container, Row,Card } from 'react-bootstrap'
import SIH from '../images/JMI_SIH_2022.jpeg'
import RepublicDay2023 from '../images/RepublicDay2023.jpeg'
import './News.css'

function News() {
  return (
    <Container>
        <h1 style={{fontWeight: 700,lineHeight: 2,textAlign: 'center'}}>News and Events</h1>
        <Row>
          <Col sm>
            <div>
                <a
                  href="https://news.careers360.com/jamia-millia-islamia-team-epione-wins-smart-india-hackathon-2022-winners"
                  aria-hidden="true"
                  tabindex="-1"
                >
                <picture data-anchor-v="top" data-anchor-h="center">
                  <source
                    srcset={SIH}
                  />
                  <img
                    role="presentation"
                    alt=""
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  />
                </picture>
              </a>
            </div>
          </Col>
          <Col sm>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={RepublicDay2023} />
              <Card.Body>
                <Card.Title>Republic Day celebration at FET 2023</Card.Title>
                <Card.Text>
                  For the celebration of the Republic Day all the heads of departments and the Dean came together. The 74th Republic Day celebration was held at the fet auditorium with gaiety, enthusiasmand full patriotic fervour.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  )
}

export default News

