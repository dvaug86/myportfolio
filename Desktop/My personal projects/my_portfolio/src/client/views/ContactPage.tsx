import * as React from 'react';

const ContactPage: React.FC<ContactPageProps> = (props) => { //learn strongtyping props and come up with an opinion
    return(
        <main className="conatiner">
            <section className="row">
                <div className="col-12">
                    <h1 className="display text-center">ContactPage View</h1>
                    
                </div>
            </section>
        </main>
    );
};

interface ContactPageProps {}


export default ContactPage;