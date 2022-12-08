import * as React from 'react';

const HomePage: React.FC<HomePageProps> = (props) => { //learn strongtyping props and come up with an opinion
    return (
        <main className="conatiner">
            <div className="head">
                <div className=" flex-row  d-flex justify-content-center fs-1 mb-5">
                    WELCOME!
                </div>
            </div>
            <section className='bodyOfPage mx-5'>
                <img src="/myImages/tempPic.jpg" alt="tempProfile" className=' tempPic float-end h-30 shadow' />
                <div className='info '>
                    <p className=' fs-3 '>
                        Hello My name is David Vaughan, and I am full stack engineer. I am a firm believer that one should always work at improve yourself.
                        One such way is to keep learning new things. On this site you will find projects of mine that I have created in my pursuit of learning the most cutting-edge techniques
                        in the programming world. On this site you will find both a brief synopsis of what was covered in the project, as well as a link to my creation's github page (unless that information is privileged).  Please feel free to contact me with any questions, comments, or work inquiries.
                    </p>
                    <div className=' fs-3'>
                        Thanks and have a great day!
                    </div>
                    <div className=' fs-3'>
                        David Vaughan
                    </div>
                </div>





            </section>
        </main>
    );
};

interface HomePageProps { }


export default HomePage;