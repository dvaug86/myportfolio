import * as React from 'react';

const HomePage: React.FC<HomePageProps> = (props) => { //learn strongtyping props and come up with an opinion
    return (
        <main>
            <div className=" pretend_card container rounded shadow m-auto p-5 ">
                <div className="head">
                    <div className=" flex-row  d-flex justify-content-center align-content-top fs-1 ">
                        WELCOME!
                    </div>
                </div>
                <section >
                    <img src="/myImages/tempPic.jpg" alt="tempProfile" className=' tempPic float-end h-30 shadow ms-4' />
                    <div className='info  '>
                        <p className=' indent fs-3 mb-3 '>
                            Welcome to my old portfolio. I appologize if you reached this site via my resume. please check out my new portfolio website at <link rel="stylesheet" href="https://wwww.dvaughanportfolio.com" className='border-bottom'>here</link>
                        </p>
                        <div className=' d-flex align-items-bottom fs-3 pt-2 '>
                            Thanks and have a great day!
                        </div>
                        <div className="d-flex align-items-bottom justify-content-between \">
                            <div className=' fs-3 mb-2'>
                                David Vaughan
                            </div>
                           
                        </div>
                    </div>
                </section>
            </div>

        </main>
    );
};

interface HomePageProps { }


export default HomePage;