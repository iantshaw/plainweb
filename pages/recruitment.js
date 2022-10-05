import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import AigNavbar from '../components/aig-navbar';
import AigFooter from '../components/aig-footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function About() {
  return (
    <div>


      <Head>
        <title>{siteTitle}</title>
      </Head>

      <AigNavbar />
      <div className='container mt-5 mb-5'>
        <h1>About Aigence</h1>

        We are a ....
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
              We are looking for a passionate Software Engineer.
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

      <AigFooter />

    </div >
  );
}