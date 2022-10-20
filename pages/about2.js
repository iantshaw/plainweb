import Head from 'next/head';
import AigNavbar from '../components/aig-navbar';
import AigFooter from '../components/aig-footer';


export default function About() {
  return (
    <div className='overflow-hidden'>


      <Head>
        <title></title>
      </Head>

      <AigNavbar />

      <div className='container mt-5 mb-5'>
        <h1>About Us</h1>

        <p>Aigence was founded on the belief that there’s a better way to do things. We believe that the key to
          business success is to focus as much time as possible on critical tasks and to slash admin wherever possible.
          Payroll is a key part of almost every business, but is also a chronic time sink across the entire process. Whether
          running payrolls, administering the data or dealing with subsequent queries that inevitably arise, payroll is a pain
          point for many businesses which the current industry seems unwilling to address. We want to change all of that.</p>
        <p>Our mission is to remove the hardship of payroll and enable businesses to:</p>
        <ul>
          <li>
            <h3>Provide a great service to their employees</h3>
            Employees are what make businesses great and administrative work is the enemy of productivity. It's time to empower employees and make them happy by giving them what they need without adding any unnecessary hassle or confusion on top.
          </li>
          <li>
            <h3>Focus on their business</h3>
            We want to make the process of running your business easier and more enjoyable. We are developing tools that will automate away the administration, but also show what is going on in real time so that you have the reassurance everything is running smoothly, while you focus on the real business. 
          </li>
          <li>
            <h3>Use automation to be competitive</h3>
            The age of automation is here and businesses of all sizes can, and should, benefit from this revolution. We are dedicated to researching, developing, and creating solutions accessible to all, regardless of previous experience or scale.
          </li>
          <p>
          We will deliver our mission through a fully cloud-based solution which is clear, concise and responsive. Everything we do will be created with excellence for both the business and its employees at the forefront of our minds. The user experience will be slicker and simpler than anything available on the market today.
          </p>
          <p>
          To become an early adopter of our solution and see what we offer first hand, visit our sign up page.
          </p>


        </ul>





      </div>


      <div className='container-fluid bg-dark'>
        <AigFooter />
      </div>

    </div >
  );
}