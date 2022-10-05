import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Card from 'react-bootstrap/Card';


export default function Options() {
  return (
    <div>

      <div className='row p-5'>


        <div className='col-3'>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Option 1</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Grape Coloured Circles</Card.Subtitle>
              <Card.Text>
                This is from the Valiant pallette.
              </Card.Text>
              <Card.Link href="/">Option 1</Card.Link>

            </Card.Body>
          </Card>

        </div>


        <div className='col'>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Option 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Violet Coloured Circles</Card.Subtitle>
              <Card.Text>
                This is also from the Valian pallette.
              </Card.Text>
              <Card.Link href="/index2">Option 2</Card.Link>

            </Card.Body>
          </Card>

        </div>


      </div>




    </div>
  );
}