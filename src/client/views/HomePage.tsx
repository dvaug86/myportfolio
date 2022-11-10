import * as React from 'react';

const HomePage: React.FC<HomePageProps> = (props) => { //learn strongtyping props and come up with an opinion
    return (
        <main className="conatiner">
            <section className="row">
                <div className=" flex-row  d-flex justify-content-center fs-1 mb-5">
                    WELCOME!
                </div>
                <div className=" flex-row d-flex justify content center fs-3 mb-5">
                    Hello and welcome to a website I have created to showcase my portfolio of projects that I have completed.
                </div>
                <p className='flex-row d-flex justify content center indent fs-3 mb-5'>
                        I have just recently completed a full stack engineering program by covalence.io. 
                    Here you will find some of the more involved projects I have completed as part of the course as well as websites I have designed for myself and others. 
                    On the portfolio page you will see a brief summary of the project as well as a read more option. With the read more option you will a more detail description of what all was needed to be done, as well as a link for the active website as well as a link to the GitHub page I have loaded that project's code to.  Not all GitHub links will work and you will be notified. The reason for this is if I have completed a project for someone else I will keep that code private.
                </p>
                <div className='flex-row d-flex justify content center fs-3 mb-5'>
                Also on this website you will see a copy of my resume and a way to contact me for any questions, comments or work inquiries.
                </div>
                <div className='flex-row d-flex justify content center fs-3 mb-2'>
                Thanks and have a great day!
                </div>
                <div className='flex-row d-flex justify content center fs-3 mb-2'>
                David
                </div>
            </section>
        </main>
    );
};

interface HomePageProps { }


export default HomePage;