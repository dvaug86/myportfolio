import * as React from 'react';

const HomePage: React.FC<HomePageProps> = (props) => { //learn strongtyping props and come up with an opinion
    return(
        <main className="conatiner">
            <section className="row">
                <div className="col-12">
                    <h1 className="display text-center">HomePage View</h1>
                    
                </div>
            </section>
        </main>
    );
};

interface HomePageProps {}


export default HomePage;