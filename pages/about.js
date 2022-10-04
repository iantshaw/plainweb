import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import AigNavbar from '../components/aig-navbar';
import AigFooter from '../components/aig-footer';


export default function About() {
    return (
      <div>
  
  
        <Head>
          <title>{siteTitle}</title>
        </Head>
  
        <AigNavbar />


<AigFooter />

    </div >
  );
}