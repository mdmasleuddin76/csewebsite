import React from 'react'
import { Row } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Container, Button} from 'react-bootstrap'
import './Academic.css'

const myStyle = {
  border: '0px solid',
  padding: '5px',
  boxShadow: '5px 10px 8px 10px whitesmoke',
}

const btn = {
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center',
  color: '#000'
}

const pos = {
  textAlign: 'center',
  margin: '20px 20px'
}

function Academic() {
  return ( 
    <Container>
      <h1 style={{fontWeight: 700,lineHeight: 2,textAlign: 'center'}}>Academics</h1>
      <p style={{fontWeight: 500,textAlign: 'center'}}>Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world</p>
      <div className='container mt-3'>
        <Row style={pos}>
          <Col sm style={myStyle}>
            <img className='pt-3' srcSet="https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-scaled.jpg 2560w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-767x511.jpg 767w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-1023x682.jpg 1023w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-768x512.jpg 768w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-1536x1024.jpg 1536w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-2048x1365.jpg 2048w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-575x383.jpg 575w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-1499x999.jpg 1499w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-600x400.jpg 600w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-500x333.jpg 500w" alt="" />
            <h3>Bachelor of Technology</h3>
            <p className='pt-3'><span style={{fontWeight: 400}}>B.Tech is a four year full time professional degree programme designed to cater to fresh, promising minds aspiring for a career in the hardware, software and IT industry.</span></p>
            <div className='text-center'>
              <Button variant="outline-primary"><a style={btn} href="/B.Tech">Bachelor of Technology</a></Button>
            </div>
          </Col>
          <Col sm style={myStyle}>
            <img className='pt-3' srcSet="https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-scaled.jpg 2560w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-767x511.jpg 767w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-1023x682.jpg 1023w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-768x512.jpg 768w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-1536x1024.jpg 1536w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-2048x1365.jpg 2048w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-575x383.jpg 575w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-1499x999.jpg 1499w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-600x400.jpg 600w, https://www.stanford.edu/wp-content/uploads/2023/03/20210514Jasmin_Lopez_Tang_Dalsgaard796A0775-1-500x333.jpg 500w" alt="" />
            <h3>Bachelor of Engineering</h3>
            <p className='pt-3'><span style={{fontWeight: 400}}>B.E. is a four year part time (evening) degree programme tailored for government officials and industry professionals looking for professional advancement.</span></p>
            <div className='text-center'>
              <Button variant="outline-primary"><a style={btn} href="/B.E">Bachelor of Engineering</a></Button>
            </div>
          </Col>
        </Row>
        <Row style={pos}>
          <Col sm style={myStyle}>
            <img className='pt-3' srcSet="https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-scaled.jpg 2560w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-767x512.jpg 767w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-1023x682.jpg 1023w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-768x512.jpg 768w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-1536x1024.jpg 1536w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-2048x1366.jpg 2048w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-575x384.jpg 575w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-1499x1000.jpg 1499w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-600x400.jpg 600w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-500x333.jpg 500w" alt="" />
            <h3>Master of Technology</h3>
            <p className='pt-3'><span style={{fontWeight: 400}}>M.Tech is a two year full time professional cum research oriented degree programme to prepare the students for advanced study and/or prospective research in the field of advanced Computer Science, Engineering and Tech.</span></p>
            <div className='text-center'>
              <Button variant="outline-primary"><a style={btn} href="/M.Tech">Master of Engineering</a></Button>
            </div>
          </Col>
          <Col sm style={myStyle}>
            <img className='pt-3' srcSet="https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-scaled.jpg 2560w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-767x512.jpg 767w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-1023x682.jpg 1023w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-768x512.jpg 768w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-1536x1024.jpg 1536w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-2048x1366.jpg 2048w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-575x384.jpg 575w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-1499x1000.jpg 1499w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-600x400.jpg 600w, https://www.stanford.edu/wp-content/uploads/2023/03/20220714Hopkins_Marine_Station_N6A7270-1-500x333.jpg 500w" alt="" /> 
            <h3>Ph.D</h3>
            <p className='pt-3'><span style={{fontWeight: 400}}>Ph.D. in Computer Engineering is the doctoral degree programme tailored for academics cum research prospective candidates.They are offered the opportunity to pursue theoretical and pragmatic research focussed on a topic of their interest.</span></p>
            <div className='text-center'>
              <Button variant="outline-primary"><a style={btn} href="/Ph.D">Ph.D</a></Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Academic
