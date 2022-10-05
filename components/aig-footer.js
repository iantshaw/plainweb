// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; 

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

export default function AigFooter() {
    return (


        <div className="container">
            {/* Footer */}
            <footer
                className="text-center text-lg-start text-white bg-dark"
                
            >
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Links */}
                    <section className="">
                        {/*Grid row*/}
                        <div className="row">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Aigence
                                </h6>
                                <p>
                                    Redefining Payroll. 
                                </p>
                            </div>
                            {/* Grid column */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold"></h6>
                                <p>
                                    <a className="text-white">About Us</a>
                                </p>
                                <p>
                                    <a className="text-white">Recruitment</a>
                                </p>
                                <p>
                                    <a className="text-white">Contact</a>
                                </p>
                                <p>
                                    <a className="text-white"></a>
                                </p>
                            </div>
                            {/* Grid column */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                
                                </h6>
                                <p>
                                    <a className="text-white">Privacy Policy</a>
                                </p>
                                <p>
                                    <a className="text-white"></a>
                                </p>
                                <p>
                                    <a className="text-white"></a>
                                </p>
                                <p>
                                    <a className="text-white">Help</a>
                                </p>
                            </div>

                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />

                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i>60 Weston Street</p>
                                <p><i className="fas fa-envelope mr-3"></i> London, SE1 3QJ</p>
                                <p><i className="fas fa-phone mr-3"></i> hello@aigence.io</p>
                                <p><i className="fas fa-print mr-3"></i> </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/*Grid row*/}
                    </section>
                    {/* Section: Links */}

                    <hr className="my-3" />

                    {/* Section: Copyright */}
                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            {/* Grid column */}
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                {/* Copyright */}
                                <div className="p-3">
                                    © 2022 Copyright
                                    Aigence
                                </div>
                                {/* Copyright */}
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                {/* Facebook */}


                                {/* Twitter */}
                                <a
                                    className="btn btn-outline-light btn-floating m-1"
                                    className="text-white"
                                    role="button"
                                ><FontAwesomeIcon icon={faTwitter} /></a>

                                {/* LinkedIn */}
                                <a
                                    className="btn btn-outline-light btn-floating m-1"
                                    className="text-white p-3"
                                    role="button"
                                    
                                >
                                    
                                <FontAwesomeIcon icon={faLinkedinIn} /></a>

                                {/* Instagram */}
                                <a
                                    className="btn btn-outline-light btn-floating m-1"
                                    className="text-white"
                                    role="button"
                                ><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                            {/* Grid column */}
                        </div>
                    </section>
                    {/* Section: Copyright */}
                </div>
                {/* Grid container */}
            </footer>
            {/* Footer */}
        </div>



    );
};
