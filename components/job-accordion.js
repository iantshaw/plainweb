import { useState } from 'react';
import styles from './jobaccordion.module.css';
import { Accordion, Button } from 'react-bootstrap';

export default function JobAccordion() {

  const [activeId, setActiveId] = useState('0');

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }


  return (

    <Accordion>

      <div className={activeId === '0' ? 'styles.panelwrap styles.activepanel' : 'styles.panelwrap'}>
        <div className={styles.panelheader}>
          <Accordion.Button onClick={() => toggleActive('0')} className={styles.panelbody} variant="link" eventKey="0">
            Show / Hide Description
          </Accordion.Button>
        </div>

        <Accordion.Body eventKey="0">
          <div className={styles.panelbody}>
            <p>In this role you will:</p>
            <ul>
              <li>Contribute to product strategy and definition, as we build our flagship product</li>
              <li>Be part of a team to design and develop an amazing customer experience</li>
              <li>Push your development skills to the limit crafting our product, utilising the latest techniques and technologies</li>
              <li>Develop, test, learn - prototype new ideas, test in the real world, and iterate based on what we learn</li>
              <li>Work directly with our customers to ensure that we solve their problems</li>
              <li>Mentor junior developers as we strive for excellence across our team</li>
            </ul>


            <p>Experience you bring includes:</p>
            <ul>
              <li>Considerable JavaScript and ideally Typescript experience</li>
              <li>Developing web apps using React and Node JS</li>
              <li>Prototyping, refining, testing </li>
              <li>Communicating </li>
              <li>Continuous Delivery</li>
              <li>Working with the team to achieve rapid prototyping</li>
              <li>Enthusiasm to work in a small, exciting, collaborative cross-discipline team at the earliest stages of a company</li>
            </ul>

          </div>
        </Accordion.Body>
      </div>




    </Accordion>
  );
}



