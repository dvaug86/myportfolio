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
                            Hello My name is David Vaughan, and I am a full stack engineer. I am a firm believer that one should always work at improving yourself.
                            One such way is to keep learning new things. On this site you will find projects of mine that I have created in my pursuit of learning the most cutting-edge techniques
                            in the programming world. You will find with the portfolio link, both a brief synopsis of what was covered in the project, as well as a link to my creation's github page (unless that information is privileged).  Please feel free to contact me with any questions, comments, or work inquiries.
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