import Head from 'next/head';
import AigNavbar from '../components/aig-navbar';
import AigFooter from '../components/aig-footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import JobAccordion from '../components/job-accordion';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function About() {
  return (
    <div className='overflow-hidden'>


      <Head>
        <title>Aigence: Join Us</title>
      </Head>

      <AigNavbar />
      
      
      
      
      
      
      
      
      
      
      
      
      <Container fluid className='bg-info'>

        <div id='rightgutter' className='row justify-content-md-center'>
          <Col xs lg='3' className='m-5'>
            <h1 className="display-5 fw-bold lh-1 mb-3 mt-5 text-white">Join Aigence</h1>
            <p className="lead text-white">Our mission is to free up our customer's time so they can focus on adding value to their businesses.</p>
          </Col>
          <Col xs lg='3' className='m-5'>

            <br />
          </Col>
        </div>

      </Container>






      <Container>
        <h1 className="display-5 fw-bold lh-1 mb-3 mt-5 text-black">Current Opportunities</h1>
        <br />
        <Row>

          <Col xs={12} md={6}>
            <Card className='m-2'>
            <Card.Header className='bg-secondary text-white'>Front End Engineer</Card.Header>
              <Card.Body>
                <Card.Title>Lead Front End Software Engineer</Card.Title>
                <Card.Text>
                  We’re looking for a Lead React Software Engineer to join us at the beginning of our journey. You will be a key member of the team shaping the future of the company, with the opportunity to grow as the company grows.
                  <br />
                  <br />
                  <JobAccordion />
                </Card.Text>
                <Button variant="info text-white">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className='m-2'>
            <Card.Header className='bg-secondary text-white'>Front End Engineer</Card.Header>
              <Card.Body>
                <Card.Title>Lead Front End Software Engineer</Card.Title>
                <Card.Text>
                  We’re looking for a Lead React Software Engineer to join us at the beginning of our journey. You will be a key member of the team shaping the future of the company, with the opportunity to grow as the company grows.
                  <br />
                  <br />
                  <JobAccordion />
                </Card.Text>
                <Button variant="info text-white">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>

          <Col xs={12} md={6}>
            <Card className='m-2'>
              <Card.Header className='bg-secondary text-white'>Front End Engineer</Card.Header>
              <Card.Body>
                <Card.Title>Lead Front End Software Engineer</Card.Title>
                <Card.Text>
                  We’re looking for a Lead React Software Engineer to join us at the beginning of our journey. You will be a key member of the team shaping the future of the company, with the opportunity to grow as the company grows.
                  <br />
                  <br />
                  <JobAccordion />
                </Card.Text>
                <Button variant="info text-white">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className='m-2'>
            <Card.Header className='bg-secondary text-white'>Front End Engineer</Card.Header>
              <Card.Body>
                <Card.Title>Lead Front End Software Engineer</Card.Title>
                <Card.Text>
                  We’re looking for a Lead React Software Engineer to join us at the beginning of our journey. You will be a key member of the team shaping the future of the company, with the opportunity to grow as the company grows.
                  <br />
                  <br />
                  <JobAccordion />
                </Card.Text>
                <Button variant="info text-white">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


<br />



      <div className='container-fluid bg-dark'>
        <AigFooter />
      </div>

    </div >
  );
}