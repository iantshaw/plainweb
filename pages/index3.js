import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import AigNavbar from '../components/aig-navbar';
import AigFooter from '../components/aig-footer';

export default function Home() {
  return (
    <div>


      <Head>
        <title>{siteTitle}</title>
      </Head>

      <AigNavbar />


      <div className="container-fluid"  style={{backgroundImage: '../public/images/manchester.png' }}>
      <div className="row" style={{backgroundImage: '../public/images/manchester.png' }}>
        <div className="col-2 bg-info" style={{backgroundImage: '../public/images/manchester.png' }}>
        </div>
        <div className="col-8 bg-info">
          <div className="row flex-lg-row-reverse g-1 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="../images/hero-image.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3 mt-5 text-white">Redefining Payroll</h1>
              <p className="lead text-white">Slash time spent on payroll administration and make your team happy.</p>

            </div>
          </div>
        </div>
        <div className="col-2 bg-info">
        </div>
      </div>
    </div><div className='container'>
        <div className="row">
          <div className="col-lg-4 text-center mt-n3">
            <img src="../images/recruitment.svg" className="rounded-circle shadow mx-lg-auto " alt="Bootstrap Themes" width="100" height="100" loading="lazy" />
            <h5 className='mt-3'>Sign Up to Our Beta Programme</h5>
            <p>And lastly this, the third column of representative placeholder content.</p>
          </div>
          <div className="col-lg-4 text-center mt-n3">
            <img src="../images/recruitment.svg" className="rounded-circle shadow mx-lg-auto " alt="Bootstrap Themes" width="100" height="100" loading="lazy" />
            <h5 className='mt-3'>We Are Hiring!</h5>
            <p>And lastly this, the third column of representative placeholder content.</p>
          </div>
          <div className="col-lg-4 text-center mt-n3">
            <img src="../images/recruitment.svg" className="rounded-circle shadow mx-lg-auto " alt="Bootstrap Themes" width="100" height="100" loading="lazy" />
            <h5 className='mt-3'>More things!</h5>
            <p>And lastly this, the third column of representative placeholder content.</p>
          </div>
        </div>
      </div><div className="container px-4 py-5" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">

            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="icon-link">
              Call to action

            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">

            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="icon-link">
              Call to action

            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">

            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="icon-link">
              Call to action

            </a>
          </div>
        </div>
      </div><div className='container-fluid bg-dark'>
        <AigFooter />
      </div>
    </div >
  );
}