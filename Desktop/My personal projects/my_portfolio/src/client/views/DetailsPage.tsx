import * as React from 'react';
import * as moment from 'moment'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { IWebsite } from '../utils/interfaces';

const DetailsPage: React.FC<DetailsPageProps> = (props) => { //learn strongtyping props and come up with an opinion
    const { detailid } = useParams();
    const [site, setSite] = React.useState<IWebsite | null>(null);

    React.useEffect(() => {
        (async () => {
            const res = await fetch(`/api/summary/${detailid}`);
            const site = await res.json();
            setSite(site);
        })();
    }, []);

    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <article className="card my-2 shadow">
                        <div className="card-body">
                            <h1 className="card-text text-center">{site?.title}</h1>
                            <h6 className="card-text text-center text-muted mb-2">
                                Created on {moment(site?._created).format('MMM Do, YYYY')}
                            </h6>
                            <p className="card-text px-8 mb-5">{site?.assignment} </p>
                            <div className=' d-flex justify-content-between  '>
                                <Link className='btn btn-outline-secondary' to='/portfolio'> Back!</Link>
                                <span>
                                    <button className='btn btn-outline-secondary' type='button' onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = `${site?.websiteLink}`
                                    }} >
                                        Website Link
                                    </button>
                                    <button className='btn btn-outline-secondary' type='button' onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = `${site?.githubLink}`
                                    }} >
                                        GitHub Link
                                    </button>
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
};

interface DetailsPageProps { }


export default DetailsPage;