import * as React from 'react';
import { Link } from 'react-router-dom';

const ResumePage: React.FC<ResumePageProps> = (props) => { //learn strongtyping props and come up with an opinion
    return (
        <main className="conatiner resumeMain rounded shadow mx-5 px-3 mb-5">
            <section className="d-flex flex-row justify-content-between align-items-center p-3">
                <div className="d-flex  col-6 ">
                    <h1 className="display text-center  border-bottom border-2 border-dark">David Vaughan</h1>
                </div>
                <div className=" fs-5 d-flex flex-column justify-content-end align-items-center">
                    <a href="HTTPS://GITHUB.COM/DVAUG86">My Github Link</a>
                    <Link className="primary" to={`/contact`}>Contact Me!</Link>
                </div>
            </section>

            <div >
                <h2 className="   flex-row  d-flex justify-content-center my-2">HIGHLY MOTIVATED CAREER ENGINEER WITH BROAD KNOWLEDGE BASE </h2>
                <h2 className="  flex-row  d-flex justify-content-center alighn-content-top">
                    <span className="border-bottom border-2 border-dark py-2 ">  AND DEVELOPING EXPERIENCE IN CODING AND PROGRAMMING</span></h2>
            </div>
            <div>
                <div className=" row fs-5 border-bottom border-2 border-dark p-3 mb-3 mx-3">
                    <div className="col-md-3">
                        <li>Accountable</li>
                        <li>Adaptable</li>
                        <li>Cooperative</li>
                    </div>
                    <div className="col-md-3">
                        <li>Detail Oriented</li>
                        <li>Diligent</li>
                        <li>Eager</li>
                    </div>
                    <div className="col-md-3">
                        <li>Flexible</li>
                        <li>Helpful</li>
                        <li>Procedural</li>
                    </div>
                    <div className="col-md-3">
                        <li>Prompt</li>
                        <li>Straightforward</li>
                        <li>Quick Learner</li>
                    </div>
                </div>
            </div>
            <div className=" flex-row  d-flex justify-content-center">
                <h2 className="border-bottom border-2 border-dark py-2" >Technical Skills</h2>
            </div>
            <div>
                <div className=" row fs-5 border-bottom border-2 border-dark p-3 mb-3 mx-3">
                    <div className="col-md-3">
                        <li>ArchiCAD</li>
                        <li>AutoCAD</li>
                        <li>Bootstrap</li>
                        <li>CSS</li>
                    </div>
                    <div className="col-md-3">
                        <li>ENERCALC</li>
                        <li>Forte</li>
                        <li>HTML</li>
                        <li>JavaScript/TypeScript</li>
                    </div>
                    <div className="col-md-3">
                        <li>Node.js/Express</li>
                        <li>Python</li>
                        <li>RAM</li>
                        <li>React</li>
                    </div>
                    <div className="col-md-3">
                        <li>Revit</li>
                        <li>Risa</li>
                        <li>SAP2000</li>
                    </div>
                </div>
            </div>
            <div className=" row fs-5 border-bottom border-2 border-dark p-3 mb-3 mx-3">
                <div className=" flex-row d-flex justify-content-center">
                    <h2 className="border-bottom border-2 border-dark py-2" >EDUCATION</h2>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <div className="fs-5"> <span className='fw-bold'> Full  stack Engineering Bootcamp Program:</span> <span className="fst-italic">  Covalence.io</span></div>
                    </div>
                    <div className="fw-bold fs-5">2022</div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <div className="fs-5"> <span className='fw-bold'> Introduction to Python Programming Certification:</span> <span className="fst-italic">  University of Pennsylvania</span></div>
                    </div>
                    <div className="fw-bold fs-5">2020</div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <div className="fs-5"> <span className='fw-bold'> Civil Engineering Bachelor of Science:</span> <span className="fst-italic"> Kennesaw State University</span></div>
                    </div>
                    <div className="fw-bold fs-5">2013</div>
                </div>
            </div>
            <div className=" row fs-5 border-bottom border-2 border-dark p-3 mb-3 mx-3">
                <div className="flex-row d-flex justify-content-center">
                    <h2 className="border-bottom border-2 border-dark  pt-3 pb-2">PROFESSIONAL SUMMARY</h2>
                </div>

                <div className='mb-3'>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="fs-5"> <span className="fw-bold">Carpenter’s Apprentice:</span> <span className='fst-italic'>Mateosky Construction</span>  </div>
                        <div className="fw-bold fs-5">2019-2021</div>
                    </div>
                    <div className="fs-5">Completed tasks related to construction and acted as part of a team to finish critical jobs</div>
                </div>
                <div className='mb-3'>
                    <div className="d-flex flex-row justify-content-between ">
                        <div className="fs-5"> <span className="fw-bold">Hotel Engineer:</span> <span className='fst-italic'>Snake River Lodge and Spa</span>  </div>
                        <div className="fw-bold fs-5">2018-2019</div>
                    </div>
                    <div className="fs-5">Worked on refinishing and updating projects and completed regular maintenance</div>
                </div>
                <div className='mb-3'>
                    <div className="d-flex flex-row justify-content-between ">
                        <div className="fs-5"> <span className="fw-bold">Structural Engineer:</span> <span className='fst-italic'>Y2 Consultants</span>  </div>
                        <div className="fw-bold fs-5">2017-2018</div>
                    </div>
                    <div className="fs-5">Prepared material and building calculations and created models using Revit, AutoCad, and ArchiCad</div>
                    <div className="fs-5">Performed inspections and reviewed drawings for accuracy and completion</div>
                    <div className="fs-5">Coordinated between architects and construction workers to complete ongoing projects</div>
                </div>
                <div className='mb-3'>
                    <div className="d-flex flex-row justify-content-between ">
                        <div className="fs-5"> <span className="fw-bold">Design Engineer:</span> <span className='fst-italic'>Primus Builders Inc.</span>  </div>
                        <div className="fw-bold fs-5">2016-2017</div>
                    </div>
                    <div className="fs-5">Created models using design software and observed drawings to ensure proper specifications were met</div>
                    <div className="fs-5">Prepared calculations for the design process and attended coordination meetings</div>
                </div>
                <div className='mb-3'>
                    <div className="d-flex flex-row justify-content-between ">
                        <div className="fs-5"> <span className="fw-bold">Structural Analyst:</span> <span className='fst-italic'>FDH Velocitel</span>  </div>
                        <div className="fw-bold fs-5">2014-2015</div>
                    </div>
                    <div className="fs-5">Performed structural analysis evaluations and comprehensive report summaries of cell phone towers and their</div>
                    <div className="fs-5">foundations</div>
                </div>
                <div className='mb-3'>
                    <div className="d-flex flex-row justify-content-between ">
                        <div className="fs-5"> <span className="fw-bold">Geotechnical Engineer:</span> <span className='fst-italic'>United Consulting</span>  </div>
                        <div className="fw-bold fs-5">2013-2014</div>
                    </div>
                    <div className="fs-5">Functioned as the primary inspector for a 23-story apartment complex in Atlanta</div>
                    <div className="fs-5">Performed inspections, completed daily reports, and collected/summarized results from testing procedures</div>
                </div>
                <div className='mb-3'>
                    <div className="d-flex flex-row justify-content-between ">
                        <div className="fs-5"> <span className="fw-bold">Research Assistant (Undergrad):</span> <span className='fst-italic'>Southern Polytechnic State University</span>  </div>
                        <div className="fw-bold fs-5">2012-2013</div>
                    </div>
                    <div className="fs-5">Performed various testing for hot mix asphalt as well as modeling and characterization for the Georgia Department of</div>
                    <div className="fs-5">Transportation database</div>
                </div>
            </div>
            <div className=" row fs-5 border-bottom border-2 border-dark p-3 mb-3 mx-3">
                <div className="flex-row d-flex justify-content-center">
                    <h2 className="border-bottom border-2 border-dark  pt-3 pb-2">PUBLICATIONS</h2>
                </div>
                <div className="mb-3">
                    <div className="fs-5"> <span className="fw-bold">“Use of Recycled Concrete Materials as Aggregate Base Layer”:</span> <span className='fst-italic'>Primary Author Dr. Sung-Hee Kim, P.E.</span>  </div>
                    <div className="fs-5">Recognized in publication as Undergrad Research Assistant</div>
                </div>
            </div>
            <div className=" row fs-5  p-3 mb-5 mx-3">
                <div className="flex-row d-flex justify-content-center">
                    <h2 className="border-bottom border-2 border-dark  pt-3 pb-2">CERTIFICATIONS</h2>
                </div>

                <div className="mb-2">
                    <div className="fs-5"> <span className="fw-bold"> Engineer in Training (EIT) License &amp; Certification:</span> <span >EIT025970</span>  </div>
                </div>
                <div className="mb-2">
                    <div className="fs-5"> <span className="fw-bold"> American Concrete Institute (ACI) Certification:</span> <span >01256709</span>  </div>
                </div>
            </div>
        </main>
    );
};

interface ResumePageProps { }


export default ResumePage;