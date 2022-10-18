import Head from 'next/head';
import AigNavbar from '../components/aig-navbar';
import AigFooter from '../components/aig-footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import JobAccordion from '../components/job-accordion';



export default function About() {
  return (
    <div>


      <Head>
        <title>Aigence: Join Us</title>
      </Head>

      <AigNavbar />
      <div className='container mt-5 mb-5'>
        <h1>About Aigence</h1>

        <p>At Aigence, we’re using automation to make payroll a whole lot easier, saving days in administration and empowering employees to manage their information. We’re changing payroll from a chore to an opportunity to deliver employees the information they seek. </p>
        <p>Our mission is to free up our customers’ time to focus on adding value to their businesses and delight their employees at the same time. </p>
        <p>Payroll has historically been painful, error-prone and backward looking, leaving employees to discover errors only after they have happened. We are changing all of this whilst significantly enhancing the user experience.</p>
        

      </div>
      <div className='container mt-5 mb-5'>
        <h1>Current Opportunities</h1>


      </div>


      <div className='container mt-5 mb-5'>
        <Card>
          <Card.Header>Front End Engineer</Card.Header>
          <Card.Body>
            <Card.Title>Lead Front End Software Engineer</Card.Title>
            <Card.Text>
            We’re looking for a Lead React Software Engineer to join us at the beginning of our journey. You will be a key member of the team shaping the future of the company, with the opportunity to grow as the company grows.

              <br />
              <br />


              <JobAccordion />


            </Card.Text>
            <Button variant="primary">Apply Now</Button>
          </Card.Body>
        </Card>


      </div>
      <div className='container mt-5 mb-5'>
        <br />
        <br />
        <br />

      </div>

      <div className='container-fluid bg-dark'>
        <AigFooter />
      </div>

    </div >
  );
}