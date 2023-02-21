import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

import type { IWebsite } from '../utils/interfaces'

const PreviewCard: React.FC<PreviewCardProps> = ({ site }) => { //learn strongtyping props and come up with an opinion
    return (

        <div className="col-md-3 ms-4">
            <article className="card mb-4  shadow"  >
                <div className="card-body portfolio"  >
                    <h4 className="card-title" >{site.title}</h4>
                    <p className="card-text text-black-50 indent mb-2">{site.summary}</p>
                    <p className="card-text text-black-50  fw-bold mb-2 ">Skills: {site.assignment}</p>

                    <div className=" bg-transparent border-top border-info d-flex align-items-center justify-content-start ">
                        <span>
                            <button className='btn btn-sm btn-primary mt-2 me-2' type='button' onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `${site?.websiteLink}`
                            }} >
                                Website Link
                            </button>
                            <button className='btn btn-sm btn-primary mt-2 ms-2' type='button' onClick={(e) => {
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

    );
};

interface PreviewCardProps {
    site: IWebsite
}


export default PreviewCard;


