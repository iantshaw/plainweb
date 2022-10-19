import Head from 'next/head';
import AigNavbar from '../components/aig-navbar';
import AigFooter from '../components/aig-footer';


export default function Contact() {
  return (
    <div className='overflow-hidden'>


      <Head>
        <title>Aigence - Contact Us</title>
      </Head>

      <AigNavbar />

      <div className='container'>Contact!</div>


      <div className='container-fluid bg-dark'>
        <AigFooter />
      </div>

    </div >
  );
}