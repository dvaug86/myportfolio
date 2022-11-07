import * as React from 'react';

const AdminPageResume: React.FC<AdminPageResumeProps> = (props) => { //learn strongtyping props and come up with an opinion
    return(
        <main className="conatiner">
            <section className="row">
                <div className="col-12">
                    <h1 className="display text-center">AdminPageResume View</h1>
                    
                </div>
            </section>
        </main>
    );
};

interface AdminPageResumeProps {}


export default AdminPageResume;