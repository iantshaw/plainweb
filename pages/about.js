import Head from 'next/head';
import AigNavbar from '../components/aig-navbar';
import AigFooter from '../components/aig-footer';


export default function About() {
    return (
      <div>
  
  
        <Head>
          <title></title>
        </Head>
  
        <AigNavbar />

<div  className='container mt-5 mb-5'>
  <h1>About Us</h1>

<p>The dawn of hyper-automation is finally here, and it's time to say goodbye forever to the drawn out, administration heavy, we used to run payroll. Introducing Aigence—the first company in its field dedicated towards improving employee experience as much as saving the business time! Payroll automation has been around for years but typically only automates the process of calculating deductions; now real automation is here - run payroll in minutes, onboard new employees with just a few clicks, remove errors and slash administration. Not to mention guaranteed compliance. 
</p>
<p>If you're looking for challenging work that will take your skills to the next level, then we might have something worth investigating. We are always on the lookout of passionate individuals who want make an impact with their creative talent!
</p>
</div>


<div className='container-fluid bg-dark'>
        <AigFooter />
      </div>

    </div >
  );
}