import * as React from 'react';
import * as moment from 'moment';
import { Link, useNavigate, useParams } from 'react-router-dom';

import type { IWebsite } from '../utils/interfaces'

const AdminPreviewCard: React.FC<AdminPreviewCardProps> = ({ site }) => { //learn strongtyping props and come up with an opinion
       
    return (

        <div className="col-md-4">
            <article className="card mb-4  shadow"  >
                <div className="card-body portfolio"  >
                    <h4 className="card-title" >{site.title}</h4>
                    <p className="card-text text-black-50 mb-2">{site.summary}</p>
                    <div className="card-footer bg-transparent border-info d-flex align-items-center justify-content-between">
                        <Link className="btn btn-sm btn-primary" to={`/admin/${site.id}`}>Edit it</Link>
                    </div>

                </div>
            </article>
        </div>

    );
};

interface AdminPreviewCardProps {
    site: IWebsite
}


export default AdminPreviewCard;


